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

    const cashInWallet = await prisma.user.findFirst({
      where: {
        id: params.id,
      },
      select: {
        wallet: true,
      },
    });

    const [inflows, outflows] = await prisma.$transaction([
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

    const typeTransactions = await prisma.transactionType.count({
      where: {
        user_id: params.id,
      },
    });

    const response = {
      entrada: inflows._count,
      saida: outflows._count,
      valorEmConta: cashInWallet?.wallet,
      quantidadeTipos: typeTransactions,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
