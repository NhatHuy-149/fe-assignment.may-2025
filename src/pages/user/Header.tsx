import {
  Bell,
  SettingsIcon,
  UserCircle2,
  ChevronDown,
  HouseIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (
    <div className="flex h-14 items-center justify-between bg-[#2E4374] px-4">
      <div className="flex items-center gap-3">
        <p className="text-[#00B25C] font-semibold px-5">COMPANY LOGO XXX</p>
        <HouseIcon className="h-5 w-5 text-white" />
        <div className="flex flex-col items-start px-5 py-1 bg-[#DAE6EF] rounded-md">
          <p className="text-[12px] text-[#294172]">Module</p>
          <h3 className="text-[14px] text-[#294172] font-bold">
            USER MANAGEMENT
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-white" />
        <SettingsIcon className="h-5 w-5 text-white" />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <UserCircle2 className="h-5 w-5 text-white" />

            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-white">
                Mr. David Nguyen
              </span>
              <span className="text-xs text-gray-300">Home Company</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ChevronDown className="h-5 w-5 text-white" />
      </div>
    </div>
  )
}

export default Header
