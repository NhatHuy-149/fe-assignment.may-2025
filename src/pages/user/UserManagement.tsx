import { useState } from "react"
import { columns } from "./columns"
import { DataTable } from "@/components/ui/user-data-table"
import FilterField from "./FilterField"
import { userFilters } from "@/constant/filters"
import { users } from "@/constant/users"
import { RefreshCcw } from "lucide-react"
import Information from "./Information"
import Header from "./Header"

function UserManagement() {
  const [filters, setFilters] = useState({
    username: "",
    userId: "",
    userType: "",
    status: ["all"],
  })

  const handleFilterChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const filteredUsers = users.filter((user) => {
    return (
      (filters.username === "" ||
        user.firstName
          .toLowerCase()
          .includes(filters.username.toLowerCase())) &&
      (filters.userId === "" ||
        user.id.toLowerCase().includes(filters.userId.toLowerCase())) &&
      (filters.userType === "" || user.type === filters.userType) &&
      (filters.status.includes("all") || filters.status.includes(user.status))
    )
  })

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row max-w-[calc(100vw-4rem)] overflow-scroll h-full gap-4 my-4">
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-[13%] min-w-[9rem] space-y-4">
          <h2 className="text-sm font-medium mb-2">FILTER</h2>
          <div className="space-y-4">
            {userFilters.map((filter) => (
              <div key={filter.name}>
                <label className="block mb-2 text-sm font-semibold text-[#000000]">
                  {filter.title}
                </label>
                <FilterField
                  filter={filter}
                  value={filters[filter.name as keyof typeof filters]}
                  onChange={handleFilterChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - User Table */}
        <div className="flex-1 w-full xl:w-[50%]">
          <div className="flex items-center gap-3 mb-4 text-[#294172]">
            <h1 className="text-xl font-bold ">{filteredUsers.length} USERS</h1>
            <RefreshCcw
              className="w-6 h-6 cursor-pointer"
              onClick={() =>
                setFilters({
                  username: "",
                  userId: "",
                  userType: "",
                  status: ["all"],
                })
              }
            />
          </div>
          <DataTable
            columns={columns}
            data={filteredUsers}
            isPagination={true}
          />
        </div>

        {/* Right Sidebar - Information */}
        <Information />
      </div>
    </div>
  )
}

export default UserManagement
