import { getAllOutputTransaction } from "@/lib/prisma";
import { ErrorHandler } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const allowedMethods = ["GET", "POST"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method == "OPTIONS") {
      return ErrorHandler.handle(res, new Error("Method not allowed"));
    }

    if (req.method == "GET") {
      const id = z.string().parse(req.query.id);

      const transactionType = await getAllOutputTransaction(id);

      return res.status(200).json(transactionType);
    }
  } catch (err) {
    ErrorHandler.handle(res, err);
  }
}
