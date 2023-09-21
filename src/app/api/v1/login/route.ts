import { auth } from "@/lib/prisma";
import { HandleError } from "@/utils";
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

    const users = await auth({
      email,
      password,
    });

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return HandleError(err);
  }
}
