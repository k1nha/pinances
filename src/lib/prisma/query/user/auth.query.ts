import { compare } from "bcrypt";
import { prisma } from "../..";
import jwt from "jsonwebtoken";

export async function auth({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
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

  return userToken;
}
