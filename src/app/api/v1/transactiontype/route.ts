import { prisma } from "@/lib/prisma";
import { TransactionTypeSchema } from "@/shared/types";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";
import { z } from "zod";

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
      throw new Error("Tipo de transação já existe");
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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(String(req.url));

    const transaction_type = z.string().parse(searchParams.get("id"));

    const typeExistsOnTransaction = await prisma.finances.findFirst({
      where: {
        transaction_type,
      },
    });

    if (typeExistsOnTransaction) {
      throw new Error("Existe uma transação com esse tipo");
    }

    await prisma.transactionType.delete({
      where: {
        id: transaction_type,
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
