import { ColumnDef } from "@tanstack/react-table";

type Transaction = {
  id: string;
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "",
    header: "",
  },
];
