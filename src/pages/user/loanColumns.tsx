import type { ColumnDef } from "@tanstack/react-table"
import { ExternalLink } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface LoanDocument {
  index: string
  borrowerName: string
  loanId: string
  lender: string
  interestRate: string
  progress: number
  status: string
}

export const loanColumns: ColumnDef<LoanDocument>[] = [
  {
    accessorKey: "index",
    header: "Index",
  },
  {
    accessorKey: "borrower",
    header: "Borrower Name\nLoan ID",
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.borrowerName}</div>
        <div className="text-sm text-gray-500">{row.original.loanId}</div>
      </div>
    ),
  },
  {
    accessorKey: "lender",
    header: "Lender\nInterest Rate",
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.lender}</div>
        <div className="text-sm text-gray-500">{row.original.interestRate}</div>
      </div>
    ),
  },
  {
    accessorKey: "progress",
    header: "Process",
    cell: ({ row }) => (
      <Progress value={row.original.progress} className="w-20" />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => <ExternalLink className="w-4 h-4 text-gray-500" />,
  },
]