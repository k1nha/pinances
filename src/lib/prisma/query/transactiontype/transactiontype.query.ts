import { TransactionType } from "@/shared/types";
import { prisma } from "../..";

export async function createTransactionType(data: TransactionType) {
  const transactionTypeExists = await prisma.transactionType.findFirst({
    where: {
      name_type: data.name_type,
      user_id: data.user_id,
    },
  });

  if (transactionTypeExists) {
    throw new Error("TransactionType already exists");
  }

  const transactionTypeCreated = await prisma.transactionType.create({
    data,
  });

  return transactionTypeCreated;
}

export function getAllTransactionsType(id: string) {
  return prisma.transactionType.findMany({
    where: {
      user_id: id,
    },
  });
}

export function getAllInputTransaction(id: string) {
  return prisma.transactionType.findMany({
    where: {
      user_id: id,
      finance_type: "ENTRADA",
    },
  });
}

export function getAllOutputTransaction(id: string) {
  return prisma.transactionType.findMany({
    where: {
      user_id: id,
      finance_type: "SAIDA",
    },
  });
}
