"use client";
import { ListType } from "@/app/dashboard/type/page";
import { Button } from "@/components/ui";
import { getAllTypes } from "@/services";
import { useQuery } from "@tanstack/react-query";
import * as yup from "yup";
import { TransactionClass, TransactionForm } from ".";

const transactionSchema = yup.object({
  transaction_type: yup.string(),
  value: yup.string(),
  description: yup.string(),
  finance_date: yup.string(),
});

export function TransactionModule() {
  const { data } = useQuery<ListType[]>({
    queryKey: ["list-type"],
    queryFn: getAllTypes,
  });

  function handleSubmitTransactionForm({ value, ...rest }: TransactionClass) {
    const transaction = {
      value: +value * 100,
      ...rest,
    };

    console.log(transaction);
  }

  return (
    <>
      <TransactionForm
        onSubmit={handleSubmitTransactionForm}
        id={"form-transaction"}
        validationSchema={transactionSchema}
        typesDATA={data || []}
      />

      <Button type={"submit"} form={"form-transaction"} className={"mt-4"}>
        Enviar
      </Button>
    </>
  );
}
