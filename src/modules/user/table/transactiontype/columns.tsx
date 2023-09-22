import { ActionsTable } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { SolarPenOutline, SolarTrashBin2Linear } from "@/shared/icons";
import { capitalizeFirstLetter } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";

type TransactionType = {
  id: string;
  name_type: string;
  finance_type: string;
  created_at: Date;
  updated_at: Date;
};

export const transactionsTypeColumns: ColumnDef<TransactionType>[] = [
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
        <div className={"flex gap-2"}>
          <ActionsTable
            title={"Editar item"}
            icon={<SolarPenOutline />}
            onClick={() => console.log(row.original.id)}
          />
          <ActionsTable
            title={"Você tem certeza disso?"}
            description={
              "Essa ação não pode ser revertida. Você tem certeza de apagar permanentemente esse registro?"
            }
            icon={<SolarTrashBin2Linear height={18} width={18} />}
            onClick={() => console.log(row.original.id)}
          />
        </div>
      );
    },
  },
];
