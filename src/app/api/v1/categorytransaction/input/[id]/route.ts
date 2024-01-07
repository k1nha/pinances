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

    const transactionType = await prisma.transactionType.findMany({
      where: {
        user_id: id,
        finance_type: "ENTRADA",
      },
    });

    return NextResponse.json(transactionType, {
      status: 200,
    });
  } catch (err) {
    return HandleError(err);
  }
}
