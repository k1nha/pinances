import { createTransactionType } from "@/lib/prisma";
import { TransactionTypeSchema } from "@/shared/types";
import { ErrorHandler } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

const allowedMethods = ["GET", "POST"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method == "OPTIONS") {
      return ErrorHandler.handle(res, new Error("Method not allowed"));
    }

    if (req.method === "POST") {
      const transactiontypeValidation = TransactionTypeSchema.parse(req.body);

      const transactionType = await createTransactionType(
        transactiontypeValidation
      );

      return res.status(201).json(transactionType);
    }
  } catch (err) {
    ErrorHandler.handle(res, err);
  }
}
