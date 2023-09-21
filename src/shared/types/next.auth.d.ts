import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      user_id: string;
      user_email: string;
      user_name: string;
    };
  }
}
