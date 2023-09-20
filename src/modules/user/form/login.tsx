"use client";
import { Button } from "@/components/ui";
import { LoginForm, User } from ".";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function Login() {
  const { replace } = useRouter();

  async function handleLogin(data: User) {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    replace("/dashboard");
    return;
  }

  return (
    <div className={"w-full px-10 flex flex-col gap-3 max-w-md"}>
      <LoginForm
        onSubmit={handleLogin}
        validationSchema={loginSchema}
        id={"login-form"}
      />
      <Button type={"submit"} variant={"default"} form={"login-form"}>
        Login
      </Button>
    </div>
  );
}
