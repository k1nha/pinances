import { User } from "@/shared/types";
import { prisma } from "../../prisma.client";

export function getAllUsers() {
  return prisma.user.findMany({
    select: {
      email: true,
      id: true,
      name: true,
      created_at: true,
    },
  });
}

export async function createUser(user: User) {
  const userExists = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (userExists) {
    throw new Error("User already exists");
  }

  const userCreated = await prisma.user.create({
    data: user,
  });

  return userCreated;
}
