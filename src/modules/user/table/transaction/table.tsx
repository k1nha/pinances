import { Categories } from "@/app/dashboard/category/page";
import { DataTable } from "@/components";
import { LoadingSpinner } from "@/shared/icons";
import { TransactionColumns } from ".";

type TransactionTableProps = {
  data: Categories[];
  isLoading: boolean;
};

export function TransactionProps(props: TransactionTableProps) {
  if (props.isLoading) return <LoadingSpinner />;

  return (
    <DataTable columns={TransactionColumns} data={props.data} pageSize={5} />
  );
}
