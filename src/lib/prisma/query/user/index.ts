import { prisma } from "../../prisma.client";

export function getAllUsers() {
  return prisma.user.findMany({});
}

export async function createUser(user: User) {
  await prisma.user.create({
    data: user,
  });
}
