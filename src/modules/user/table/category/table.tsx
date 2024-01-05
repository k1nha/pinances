import { Categories } from "@/app/dashboard/category/page";
import { DataTable } from "@/components";
import { CategoryTransactionColumns } from "@/modules/user";
import { LoadingSpinner } from "@/shared/icons";

type CategoryTableProps = {
  data: Categories[];
  isLoading: boolean;
};

export function CategoryTable(props: CategoryTableProps) {
  if (props.isLoading) return <LoadingSpinner />;

  return (
    <DataTable
      columns={CategoryTransactionColumns}
      data={props.data}
      pageSize={5}
    />
  );
}
