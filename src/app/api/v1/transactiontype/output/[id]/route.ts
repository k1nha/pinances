import { getAllInputTransaction, getAllOutputTransaction } from "@/lib/prisma";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = z.string().parse(params.id);

    const transactionType = await getAllOutputTransaction(id);

    return NextResponse.json(transactionType, {
      status: 200,
    });
  } catch (err) {
    return HandleError(err);
  }
}
