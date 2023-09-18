import { ActionsTable } from "@/components";
import { capitalizeFirstLetter } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";

type TransactionType = {
  id: string;
  name_type: string;
  finance_type: string;
  created_at: Date;
  updated_at: Date;
};

export const transactionsColumns: ColumnDef<TransactionType>[] = [
  {
    accessorKey: "name_type",
    header: "Nome da categoria",
  },
  {
    accessorKey: "finance_type",
    header: "Tipo de transação",
    cell: ({ row }) => {
      return (
        <div className="">
          {capitalizeFirstLetter(
            String(row.getValue("finance_type")).toLowerCase()
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Criado em",
    cell: ({ row }) => {
      const formatedDate = new Date(row.original.created_at).toLocaleDateString(
        "pt-BR"
      );

      console.log(formatedDate);

      return <div>{formatedDate}</div>;
    },
  },
  {
    accessorKey: "updated_at",
    header: "Ultima atualização em",
    cell: ({ row }) => {
      const formatedDate = new Date(row.original.created_at).toLocaleString(
        "pt-BR"
      );

      return <div>{formatedDate}</div>;
    },
  },
  {
    header: "Ações",
    id: "actions",
    cell: ({ row }) => {
      return (
        <ActionsTable
          onDelete={() => console.log(row.original.id)}
          onUpdate={() => console.log(row.original.id)}
        />
      );
    },
  },
];
