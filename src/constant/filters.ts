import type { FilterConfig } from '@/types/user'

export const userFilters: FilterConfig[] = [
  {
    name: "username",
    title: "User name",
    type: "select",
    placeholder: "Select",
    options: [
      { value: "david", label: "David" },
      { value: "john", label: "John" },
    ]
  },
  {
    name: "userId",
    title: "User ID",
    type: "input",
    placeholder: "Input"
  },
  {
    name: "userType",
    title: "User type",
    type: "select",
    placeholder: "Select",
    options: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" }
    ]
  },
  {
    name: "phone",
    title: "Phone number",
    type: "input",
    placeholder: "Input"
  },
  {
    name: "email",
    title: "Email address",
    type: "input",
    placeholder: "Input"
  },
  {
    name: "status",
    title: "Status",
    type: "checkbox",
    options: [
      { value: "all", label: "All" },
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }
    ]
  }
]