import type { ColumnDef, PaginationState, ColumnFiltersState } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import data from "./data.json"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ExternalLink, ArrowUpDown } from "lucide-react"
import { setPagination, setColumnFilters, setSorting } from '@/store/features/tableSlice'
import type { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

interface Customer {
  Index: string
  "Customer Id": string
  "First Name": string
  "Last Name": string
  Company: string
  City: string
  Country: string
  "Phone 1": string
  "Phone 2": string
  Email: string
  "Subscription Date": string
  Website: string
}

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "Index",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        No.
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    enableColumnFilter: false,
  },
  {
    accessorKey: "Customer Id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Customer ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "First Name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Customer Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        <div className="font-medium">
          {row.original["First Name"]} {row.original["Last Name"]}
        </div>
        <div className="text-sm text-muted-foreground">
          {row.original.Company}
        </div>
      </div>
    ),
    enableColumnFilter: true,
  },
  {
    id: "location",
    accessorKey: "City",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Location
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),    cell: ({ row }) => (
      <div>
        <div>{row.original.City}</div>
        <div className="text-sm text-muted-foreground">
          {row.original.Country}
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div>
        <div>{row.original["Phone 1"]}</div>
        <div className="text-sm text-muted-foreground">
          {row.original.Email}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "Subscription Date",
    header: "Subscription",
    enableColumnFilter: false,
  },
  {
    id: "website",
    header: "Website",
    cell: ({ row }) => (
      <a
        href={row.original.Website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-500 hover:underline"
      >
        Visit <ExternalLink className="h-3 w-3" />
      </a>
    ),
  },
  {
    id: "actions",
    cell: ({}) => (
      <Button variant="ghost" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    ),
  },
]

function CustomerList() {
  const dispatch = useDispatch()
  const tableState = useSelector((state: RootState) => state.table)

  return (
    <div className="container mx-auto py-4">
      <DataTable<Customer, any>
        columns={columns}
        data={data.Employee as Customer[]}
        isPagination={true}
        enableSorting={true}
        enableFiltering={true}
        state={{
          pagination: {
            pageIndex: tableState.pagination.pageIndex,
            pageSize: tableState.pagination.pageSize || 10
          },
          columnFilters: tableState.columnFilters,
          sorting: tableState.sorting
        }}
        onPaginationChange={(updater) => {
          const newPagination = 
            typeof updater === 'function' 
              ? updater(tableState.pagination)
              : updater
          dispatch(setPagination(newPagination))
        }}
        onColumnFiltersChange={(filters) => {
          const newFilters = 
            typeof filters === 'function'
              ? filters(tableState.columnFilters)
              : filters
          dispatch(setColumnFilters(newFilters))
        }}
        onSortingChange={(sorting) => {
          const newSorting = 
            typeof sorting === 'function'
              ? sorting(tableState.sorting)
              : sorting
          dispatch(setSorting(newSorting))
        }}
      />
    </div>
  )
}

export default CustomerList
