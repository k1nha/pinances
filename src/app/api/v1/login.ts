import { auth } from "@/lib/prisma";
import { ErrorHandler } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  user_id: string;
  user_name: string;
  token: string;
  user_email: string;
};

const allowedMethods = ["GET", "POST"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method == "OPTIONS") {
      return ErrorHandler.handle(res, new Error("Method not allowed"));
    }

    if (req.method === "POST") {
      const { email, password } = req.body;
      const users = await auth({ email, password });

      return res.status(200).json(users);
    }
  } catch (err) {
    ErrorHandler.handle(res, err);
  }
}

//https://engineering.udacity.com/5-steps-to-create-professional-api-routes-in-next-js-201e726ead48
