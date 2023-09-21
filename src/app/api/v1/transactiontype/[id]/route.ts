import { getAllTransactionsType } from "@/lib/prisma";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = z.string().parse(params.id);

    const transactionsType = await getAllTransactionsType(id);

    return NextResponse.json(transactionsType, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
