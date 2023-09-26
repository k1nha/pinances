"use client";
import { Button, useToast } from "@/components/ui";
import { createTypeTransaction } from "@/services";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { TypeForm } from ".";
import { TypeClass } from "./type.form";
import { queryClient } from "@/lib/query";

const typeSchema = yup.object({
  name_type: yup.string().required("Nome é obrigatório"),
  finance_type: yup.string().required("Tipo é obrigatório"),
});

export function Type() {
  const { toast } = useToast();
  const { mutate: createType } = useMutation({
    mutationFn: async (data: TypeClass) => await createTypeTransaction(data),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["list-type"],
      });
      toast({
        title: "Categoria criada",
        description: "Sua categoria foi criada com sucesso",
      });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Algo aconteceu",
        variant: "destructive",
      });
    },
  });

  async function handleSubmitTypeForm(data: TypeClass) {
    createType({
      finance_type: data.finance_type,
      name_type: data.name_type,
    });
  }

  return (
    <>
      <TypeForm
        validationSchema={typeSchema}
        onSubmit={handleSubmitTypeForm}
        id={"type-form"}
      />
      <Button className={"mt-4 w-full"} type={"submit"} form={"type-form"}>
        Enviar
      </Button>
    </>
  );
}
