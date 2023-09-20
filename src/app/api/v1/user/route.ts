import { createUser, getAllUsers } from "@/lib/prisma";
import { UserSchema } from "@/shared/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const users = await getAllUsers();

    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
  }
}

export async function POST(req: Request, res: NextResponse) {
  const userValidation = UserSchema.parse(req.body);

  const userCreated = await createUser(userValidation);
}
