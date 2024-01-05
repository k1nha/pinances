"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../ui";

interface DataTableProps<T, V> {
  columns: ColumnDef<T, V>[];
  data: T[];
  pageSize: number;
}

export function DataTable<T, V>({
  columns,
  data,
  pageSize,
}: DataTableProps<T, V>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  // table.setPageSize(5);
  return (
    <div className="">
      <div className="rounded-md ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headergroup) => (
              <TableRow key={headergroup.id}>
                {headergroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center">
                  Sem Resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {table.getPageCount() != 1 ? (
        <div className="flex items-center justify-end pt-4 pb-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Voltar
          </Button>
          <span className="text-xs px-2">
            {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount() == 0 ? 1 : table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Avançar
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
