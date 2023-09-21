import { createTransactionType, prisma } from "@/lib/prisma";
import { TransactionTypeSchema } from "@/shared/types";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transactiontypeValidation = TransactionTypeSchema.parse(body);

    const transactionType = await createTransactionType(
      transactiontypeValidation
    );

    return NextResponse.json(transactionType, { status: 201 });
  } catch (err) {
    return HandleError(err);
  }
}
