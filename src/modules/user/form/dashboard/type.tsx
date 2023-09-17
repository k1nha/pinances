"use client";
import { TypeForm } from ".";
import * as yup from "yup";
import { TypeClass } from "./type.form";
import { Button, useToast } from "@/components/ui";

const typeSchema = yup.object({
  name_type: yup.string().required("Nome é obrigatório"),
  finance_type: yup.string().required("Tipo é obrigatório"),
});

export function Type() {
  const { toast } = useToast();

  function handleSubmitTypeForm(data: TypeClass) {
    console.log(data);
    toast({
      title: "Categoria criada",
      description: "Sua categoria foi criada com sucesso",
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
