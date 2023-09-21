"use client";
import { Button, useToast } from "@/components/ui";
import { LoginForm, User } from ".";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoadingSpinner } from "@/shared/icons";

const loginSchema = yup.object({
  email: yup.string().email("Email não é valido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const { replace } = useRouter();

  async function handleLogin(data: User) {
    setIsSubmitting((prev) => !prev);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      toast({
        variant: "destructive",
        title: "Algo deu errado!",
      });

      setIsSubmitting((prev) => !prev);
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
      <Button
        type={"submit"}
        variant={"default"}
        form={"login-form"}
        disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>Login</>
        )}
      </Button>
    </div>
  );
}
