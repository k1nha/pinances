import { createUser, getAllUsers } from "@/lib/prisma";
import { UserSchema } from "@/shared/types";
import { HandleError } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const users = await getAllUsers();

    return NextResponse.json(users);
  } catch (err) {
    return HandleError(err);
  }
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const body = await req.json();

    const userValidation = UserSchema.parse(body);

    const userCreated = await createUser(userValidation);

    return NextResponse.json(userCreated, { status: 201 });
  } catch (err) {
    return HandleError(err);
  }
}
