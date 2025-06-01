import { DataTable } from "@/components/ui/user-data-table"
import {
  CheckSquare,
  ExternalLink,
  FileText,
  LineChart,
  Percent,
  Users,
} from "lucide-react"
import { loanColumns } from "./loanColumns"
import { generalInformation, loanDocuments, todoItems } from "@/constant/users"

function Information() {
  return (
    <div className="w-full xl:w-[40%] space-y-4 bg-white rounded-lg">
      <div className=" space-y-4">
        <div className="flex items-center gap-2 py-2.5 border-b border-[#d9d9d9]">
          <FileText className="w-5 h-5" />
          <h2 className="font-medium text-[#767676]">GENERAL INFORMATION</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {generalInformation.map((item, index) => (
            <div key={index} className="space-y-1">
              <label className="text-sm font-medium text-[#0c0c0d]">
                {item.label}
              </label>
              <div className=" text-gray-600 ">
                {item.isLink ? (
                  <a
                    href={`https://${item.value}`}
                    className="hover:text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between py-2.5 border-b border-[#d9d9d9]">
          <div className="flex items-center gap-2 ">
            <Percent className="w-5 h-5" />
            <h2 className="font-medium text-[#767676]">
              COMMISSION STRUCTURES
            </h2>
          </div>
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-2 py-2.5 border-b border-[#d9d9d9]">
          <FileText className="w-5 h-5" />
          <h2 className="font-medium text-[#767676]">RECRUITMENT DOCUMENTS</h2>
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-2 py-2.5 border-b border-[#d9d9d9]">
          <Users className="w-5 h-5" />
          <h2 className="font-medium text-[#767676]">
            RELATED CLIENTS & LOAN DOCUMENTS
          </h2>
        </div>
        <div className="mt-4">
          <DataTable columns={loanColumns} data={loanDocuments} />
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-2 py-2.5 border-b border-[#d9d9d9]">
          <LineChart className="w-5 h-5" />
          <h2 className="font-medium text-[#767676]">PERFORMANCE</h2>
        </div>
      </div>

      <div className=" space-y-4">
        <div className="flex items-center gap-2 py-2.5 border-b border-[#d9d9d9]">
          <CheckSquare className="w-5 h-5" />
          <h2 className="font-medium text-[#767676]">TO-DO</h2>
        </div>

        <div className="space-y-2">
          {todoItems.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-[#0c0c0d] ">{item.label}</span>
              <ExternalLink className="w-3 h-3 text-gray-500" />
            </div>
          ))}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-[#0c0c0d]">
              Click to add new todo
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
