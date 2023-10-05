import { prisma } from "@/lib/prisma";
import { HandleError } from "@/utils";
import { subMonths } from "date-fns";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      throw new Error("Params missing");
    }

    const valorEmConta = await prisma.user.findFirst({
      where: {
        id: params.id,
      },
      select: {
        wallet: true,
      },
    });

    const [entrada, saida] = await prisma.$transaction([
      prisma.finances.aggregate({
        _count: true,
        where: {
          user_id: params.id,
          transactionType: {
            name_type: "ENTRADA",
          },
          finance_date: {
            gte: subMonths(new Date(), 1),
          },
        },
      }),
      prisma.finances.aggregate({
        _count: true,
        where: {
          user_id: params.id,
          transactionType: {
            name_type: "SAIDA",
          },
          finance_date: {
            gte: subMonths(new Date(), 1),
          },
        },
      }),
    ]);

    const response = {
      entrada: entrada._count,
      saida: saida._count,
      valorEmConta: valorEmConta?.wallet,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
