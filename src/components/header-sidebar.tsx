import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "./ui/typography"

export function HeaderSidebar({
  teams,
}: {
  teams: {
    name: string
    logo: string
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex gap-2">
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-lg">
          <Avatar className="w-full h-full rounded-lg">
            <AvatarImage src={activeTeam.logo} alt={activeTeam.logo} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <Typography variant="h4" className="truncate font-medium text-blue">{activeTeam.name}</Typography>
          <span className="truncate text-xs text-blue">{activeTeam.plan}</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
