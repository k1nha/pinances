import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(cred, req) {
        const response = await axios.post(
          "http://localhost:3000/api/v1/login",
          JSON.stringify({
            email: cred?.email,
            password: cred?.password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const user = await response.data;

        if (user && response.status === 200) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
