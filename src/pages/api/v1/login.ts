import { createUser, getAllUsers } from "@/lib/prisma";
import { UserSchema } from "@/shared/types";
import { ErrorHandler } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
  password: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

const allowedMethods = ["GET", "POST"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data[] | Data>>
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method == "OPTIONS") {
      return ErrorHandler.handle(res, new Error("Method not allowed"));
    }

    if (req.method === "GET") {
      const users = await getAllUsers();

      return res.status(200).json(users && []);
    }
  } catch (err) {
    ErrorHandler.handle(res, err);
  }
}

//https://engineering.udacity.com/5-steps-to-create-professional-api-routes-in-next-js-201e726ead48
