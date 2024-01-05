"use client";
import { Button } from "@/components/ui";
import { getAllCategories } from "@/services";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as yup from "yup";
import { TransactionClass, TransactionForm } from ".";
import { createFinance } from "@/services/query/transactions";
import { Categories } from "@/app/dashboard/category/page";

const transactionSchema = yup.object({
  transaction_type: yup.string(),
  value: yup.string(),
  description: yup.string(),
  finance_date: yup.string(),
});

export function TransactionModule() {
  const { data } = useQuery<Categories[]>({
    queryKey: ["transactions-category"],
    queryFn: getAllCategories,
  });

  const { mutate: createTransaction } = useMutation({
    mutationFn: async (data: TransactionClass) => createFinance(data),
  });

  async function handleSubmitTransactionForm({
    value,
    ...rest
  }: TransactionClass) {
    const transaction = {
      value: +value * 100,
      ...rest,
    };

    // TODO: Create request
    createTransaction(transaction);
  }

  return (
    <>
      <TransactionForm
        onSubmit={handleSubmitTransactionForm}
        id="form-transaction"
        validationSchema={transactionSchema}
        typesDATA={data || []}
      />

      <Button type="submit" form="form-transaction" className="mt-4">
        Enviar
      </Button>
    </>
  );
}
