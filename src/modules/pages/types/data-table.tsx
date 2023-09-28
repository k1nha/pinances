import { ListType } from "@/app/dashboard/type/page";
import { DataTable } from "@/components";
import { transactionsTypeColumns } from "@/modules/user";
import { LoadingSpinner } from "@/shared/icons";

type TableTypeProps = {
  data: ListType[];
  isLoading: boolean;
};

export function TableType(props: TableTypeProps) {
  if (props.isLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return <DataTable columns={transactionsTypeColumns} data={props.data} />;
}
