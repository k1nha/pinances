"use client";
import { Button } from "@/components/ui";
import { TransactionClass, TransactionForm } from ".";
import * as yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";

const transactionSchema = yup.object({});

export function TransactionModule() {
  const [data, setData] = useState([]);

  async function t() {
    return await axios
      .get(
        "http://localhost:3000/api/v1/transactiontype/650770784dfe37a6c7d8d01f"
      )
      .then((res) => setData(res.data));
  }

  function handleSubmitTransactionForm(data: TransactionClass) {
    //
    console.log(data);
  }

  useEffect(() => {
    t();
    console.log(data);
  }, []);

  return (
    <>
      <TransactionForm
        onSubmit={handleSubmitTransactionForm}
        id={"form - transaction"}
        validationSchema={transactionSchema}
        typesDATA={data}
      />

      <Button type={"submit"} id={"form-transaction"}>
        Enviar
      </Button>
    </>
  );
}
