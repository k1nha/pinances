"use client";
import { Button, useToast } from "@/components/ui";
import { PersonalInfoForm } from ".";
import { useState } from "react";
import { LoadingSpinner } from "@/shared/icons";
import * as yup from "yup";
import { PersonalInfo as PersonalInfoClass } from "./personal-info.form";
import { useMutation } from "@tanstack/react-query";

const personalInfoSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  contact: yup.string().required(),
});

export function PersonalInfoModule() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: personalInfoMutation } = useMutation({
    mutationFn: async (data: PersonalInfoClass) => {
      setIsLoading((prev) => !prev);
      // return await createTransactionCategory(data);
    },
    onSuccess: () => {
      toast({
        title: "Informações pessoais alterada",
        description: "Suas informações foram atualizadas com sucesso",
      });
      setIsLoading((prev) => !prev);
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Algo aconteceu",
        variant: "destructive",
      });
    },
  });

  function handleSubmitPersonalInfoForm(data: PersonalInfoClass) {
    //
    personalInfoMutation(data)
  }

  return (
    <>
      <PersonalInfoForm
        onSubmit={handleSubmitPersonalInfoForm}
        validationSchema={personalInfoSchema}
        id="personal-info-form"
      />
      <Button
        className="mt-2 w-full"
        type="submit"
        form="personal-info-form"
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
