import * as React from "react"
import {
  BookOpen,
  LayoutDashboard,
  CircleHelp,
  NotebookPen,
  PieChart,
  Frame,
  User2Icon,
  UsersIcon,
  FolderMinus
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { HeaderSidebar } from "@/components/header-sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavProjects } from "./nav-projects"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/logo.png",
  },
  teams: [
    {
      name: "ABC Company",
      logo: "/avatar.png",
      plan: "Lisa Rose",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "A1.1 - Projects",
      url: "/project",
      icon: NotebookPen,
    },
    {
      title: "A1.2 - Estimator",
      url: "/estimator",
      icon: BookOpen,
    },
    {
      title: "A1.3 - User management",
      url: "/user",
      icon: User2Icon,
    },
    {
      title: "A2 - Customer",
      url: "/customer",
      icon: UsersIcon,
    },
    {
      title: "A3 - Json Form Renderer",
      url: "/jsonformrenderer",
      icon: FolderMinus,
    },

  ],
  projects: [
    {
      name: "Administrations",
      url: "#",
      icon: Frame,
    },
    {
      name: "Documentation",
      url: "#",
      icon: PieChart,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="p-2 bg-[#f1f1f1]">
      <SidebarHeader>
        <HeaderSidebar teams={data.teams} />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
