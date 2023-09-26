import { prisma } from "@/lib/prisma";
import { HandleError } from "@/utils";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = z
      .object({
        email: z.string().email(),
        password: z.string(),
      })
      .parse(body);

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email ou senha incorretos");
    }

    const checkPassword = compare(password, user.password);

    if (!checkPassword) {
      throw new Error("Senha incorreta");
    }

    const token = jwt.sign({ id: user.id }, "19pinances10luc0705", {
      expiresIn: "1d",
    });

    const userToken = {
      user: {
        user_id: user.id,
        user_email: user.email,
        user_name: user.name,
      },
      token,
    };

    return NextResponse.json(userToken, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
