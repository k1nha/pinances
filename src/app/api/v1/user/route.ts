import { prisma } from "@/lib/prisma";
import { UserSchema } from "@/shared/types";
import { HandleError } from "@/utils";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({
      select: {
        email: true,
        id: true,
        name: true,
        created_at: true,
      },
    });

    return NextResponse.json(users);
  } catch (err) {
    return HandleError(err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const userValidation = UserSchema.parse(body);

    const userExists = await prisma.user.findFirst({
      where: {
        email: userValidation.email,
      },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(userValidation.password, 10);

    const userCreated = await prisma.user.create({
      data: {
        email: userValidation.email,
        name: userValidation.name,
        password: passwordHash,
      },
      select: {
        password: false,
      },
    });

    return NextResponse.json(userCreated, { status: 201 });
  } catch (err) {
    return HandleError(err);
  }
}
