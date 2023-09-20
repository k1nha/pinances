import { HTTP } from "@/services";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type UserCredentials = {
  email: string;
  password: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // email: { label: "email", type: "text" },
        // password: { label: "password", type: "text" },
      },
      async authorize({ email, password }: UserCredentials) {
        const response = await fetch("http://localhost:3000/api/v1/login", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
          method: "POST",
        });

        const user = await response.json();

        if (user && response.statusText === "OK") {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export default NextAuth(authOptions);
