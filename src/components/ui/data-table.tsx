import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel
} from "@tanstack/react-table"
import type {
  ColumnFiltersState,
  SortingState,
  PaginationState,
} from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isPagination?: boolean
  enableSorting?: boolean
  enableFiltering?: boolean
  state?: {
    pagination?: PaginationState
    sorting?: SortingState
    columnFilters?: ColumnFiltersState
  }
  onPaginationChange?: (updaterOrValue: PaginationState | ((old: PaginationState) => PaginationState)) => void
  onSortingChange?: (updaterOrValue: SortingState | ((old: SortingState) => SortingState)) => void
  onColumnFiltersChange?: (updaterOrValue: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState)) => void
}

function PaginationButton({
  children,
  active,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button
      className={`
        min-w-[32px] px-3 py-1 text-sm rounded border
        ${
          active
            ? "bg-blue-50 text-blue border-[1px] border-blue"
            : "bg-white text-gray-500 border-gray-600"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isPagination = false,
  enableSorting = false,
  enableFiltering = false,
  state,
  onPaginationChange,
  onSortingChange,
  onColumnFiltersChange,
}: DataTableProps<TData, TValue>) {
  // const [sorting, setSorting] = React.useState<SortingState>([])
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    // []
  // )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange,
    onSortingChange,
    onColumnFiltersChange,
    state: {
      pagination: state?.pagination,
      sorting: state?.sorting,
      columnFilters: state?.columnFilters,
    },
    enableSorting,
    enableColumnFilters: enableFiltering,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div className="space-y-4">
      {enableFiltering && (
        <div className="flex gap-2 flex-col md:flex-row ">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => {
              const column = header.column
              if (!column.getCanFilter()) return null

              return (
                <div key={header.id} className="flex flex-col gap-1">
                  <input
                    id={header.id}
                    type="text"
                    value={(column.getFilterValue() as string) ?? ""}
                    onChange={(e) => column.setFilterValue(e.target.value)}
                    className="h-8 w-[150px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                    placeholder={`Filter ${column.id}...`}
                  />
                </div>
              )
            })
          )}
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#dae6ef]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
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
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-[#111928]">
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {isPagination && (
        <div className="flex items-center gap-2 px-2">
          <PaginationButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </PaginationButton>

          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
            (pageNumber) => {
              if (
                pageNumber === 1 ||
                pageNumber === table.getPageCount() ||
                Math.abs(
                  pageNumber - (table.getState().pagination.pageIndex + 1)
                ) <= 1
              ) {
                return (
                  <PaginationButton
                    key={pageNumber}
                    active={
                      pageNumber === table.getState().pagination.pageIndex + 1
                    }
                    onClick={() => table.setPageIndex(pageNumber - 1)}
                  >
                    {pageNumber}
                  </PaginationButton>
                )
              }
              if (
                Math.abs(
                  pageNumber - (table.getState().pagination.pageIndex + 1)
                ) === 2
              ) {
                return <span key={pageNumber}>...</span>
              }
              return null
            }
          )}

          <PaginationButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </PaginationButton>

          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px] ml-4">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}
