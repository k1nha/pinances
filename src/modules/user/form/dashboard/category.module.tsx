"use client";
import { Button, useToast } from "@/components/ui";
import { queryClient } from "@/lib/query";
import { createTransactionCategory } from "@/services";
import { LoadingSpinner } from "@/shared/icons";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import * as yup from "yup";
import { CategoryForm, CategoryClass } from "./category.form";

const categorySchema = yup.object({
  name_type: yup.string().required("Nome é obrigatório"),
  finance_type: yup.string().required("Tipo é obrigatório"),
});

export function CategoryModule() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { mutate: createType } = useMutation({
    mutationFn: async (data: CategoryClass) => {
      setIsLoading((prev) => !prev);
      return await createTransactionCategory(data);
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["transactions-category"],
      });
      toast({
        title: "Categoria criada",
        description: "Sua categoria foi criada com sucesso",
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

  async function handleSubmitTypeForm(data: CategoryClass) {
    createType({
      finance_type: data.finance_type,
      name_type: data.name_type,
    });
  }

  return (
    <>
      <CategoryForm
        validationSchema={categorySchema}
        onSubmit={handleSubmitTypeForm}
        id="category-form"
      />
      <Button
        className="mt-4 w-full"
        type="submit"
        form="category-form"
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
