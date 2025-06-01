"use client"

import {
  SquareArrowOutUpRight
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="w-[134px] rounded-lg">
                <AvatarImage width="100%" src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">RFX</AvatarFallback>
              </Avatar>
              <SquareArrowOutUpRight className="ml-auto size-4" />
            </SidebarMenuButton>
   
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
