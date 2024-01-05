"use client";
import { Card } from "@/components/ui";
import { TransactionModule } from "@/modules/user";

export default function TransactionsPage() {
  return (
    <section className="p-5 flex flex-col gap-4 w-full md:w-[calc(100%-14rem)]">
      <div>
        <h1 className="text-2xl font-semibold">Transações</h1>
      </div>

      <Card className="p-6 flex flex-col">
        <h1 className="font-semibold">Adicionar nova transação</h1>
        <TransactionModule />
      </Card>

      <Card className="p-6"></Card>
    </section>
  );
}
