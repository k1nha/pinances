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

    // const infoEntrada = await prisma.finances.aggregate({
    //   _count: true,
    //   where: {
    //     user_id: params.id,
    //     transactionType: {
    //       name_type: "ENTRADA",
    //     },
    //     finance_date: {
    //       gte: subMonths(new Date(), 1),
    //     },
    //   },
    // });

    // const infoSaida = await prisma.finances.aggregate({
    //   _count: true,
    //   where: {
    //     user_id: params.id,
    //     transactionType: {
    //       name_type: "SAIDA",
    //     },
    //     finance_date: {
    //       gte: subMonths(new Date(), 1),
    //     },
    //   },
    // });

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
      entrada,
      saida,
    };

    return NextResponse.json({ entrada, saida }, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
