"use client";
import { Button, useToast } from "@/components/ui";

import { useState } from "react";
import { ResetPassword, ResetPasswordForm } from ".";
import * as yup from "yup";
import { LoadingSpinner } from "@/shared/icons";
import { useMutation } from "@tanstack/react-query";

const resetPasswordSchema = yup.object({
  currentPassword: yup.string().required("Senha atual obrigatória"),
  newPassword: yup
    .string()
    .min(6, "Mínimo de 6 caractéres")
    .required("Adicione uma nova senha"),
  confirmNewPassword: yup
    .string()
    .min(6, "Mínimo de 6 caractéres")
    .required("É preciso confirmar a nova senha"),
});

export function ResetPasswordModule() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: resetPasswordMutation } = useMutation({
    mutationFn: async (data: ResetPassword) => {
      setIsLoading((prev) => !prev);
      // return await fetchResetPassword()
    },
    onSuccess: () => {
      toast({
        title: "Senha alterada",
        description: "Sua senha foi alterada com sucesso",
      });
      setIsLoading((prev) => !prev);
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Algo estranho aconteceu",
        variant: "destructive",
      });
    },
  });

  function handleSubmitResetPasswordForm(data: ResetPassword) {
    if (data.confirmNewPassword != data.newPassword) {
      toast({
        title: "Erro",
        description: "As duas senhas devem ser iguais",
        variant: "destructive",
      });
      return;
    }
    resetPasswordMutation(data);
  }

  return (
    <>
      <ResetPasswordForm
        validationSchema={resetPasswordSchema}
        onSubmit={handleSubmitResetPasswordForm}
        id="reset-password-form"
      />
      <Button
        className="mt-2 w-full"
        type="submit"
        form="reset-password-form"
        disabled={isLoading}>
        {isLoading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>Enviar</>
        )}
      </Button>
    </>
  );
}
