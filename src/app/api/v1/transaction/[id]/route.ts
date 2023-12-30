import { prisma } from "@/lib/prisma";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = z.string().parse(params.id);

    const transactions = await prisma.finances.findMany({
      where: {
        user_id: id,
      },
    });

    return NextResponse.json(transactions, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const transactionSchema = z
      .object({
        transaction_type: z.string(),
        value: z.number(),
        finance_date: z.date(),
        description: z.string().nullable(),
      })
      .parse(req.body);

    const transaction = await prisma.finances.create({
      data: {
        user_id: params.id,
        ...transactionSchema,
      },
    });

    return NextResponse.json(transaction, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
