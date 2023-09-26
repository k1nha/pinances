import { prisma } from "@/lib/prisma";
import { TransactionTypeSchema } from "@/shared/types";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transactiontypeValidation = TransactionTypeSchema.parse(body);

    const transactionTypeExists = await prisma.transactionType.findFirst({
      where: {
        name_type: transactiontypeValidation.name_type,
        user_id: transactiontypeValidation.user_id,
      },
    });

    if (transactionTypeExists) {
      throw new Error("TransactionType already exists");
    }

    const transactionTypeCreated = await prisma.transactionType.create({
      data: {
        finance_type: transactiontypeValidation.finance_type,
        name_type: transactiontypeValidation.name_type,
        user_id: transactiontypeValidation.user_id,
      },
    });

    return NextResponse.json(transactionTypeCreated, { status: 201 });
  } catch (err) {
    return HandleError(err);
  }
}
