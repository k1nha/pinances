import { ColumnDef } from "@tanstack/react-table";

type Transaction = {
  id: string;
};

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "",
    header: "",
  },
];
