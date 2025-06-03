import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import React, { useCallback, useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

const BREADCRUMB_MAPPING: Record<
  string,
  Array<{ label: string; path: string }>
> = {
  project: [
    { label: "Project", path: "/project" },
    { label: "UrapidLoan Project", path: "/project/urapidloan" },
    { label: "[Ticket name]", path: "#" },
  ],
  estimator: [
    { label: "Estimator", path: "/estimator" },
    { label: "Work Packages", path: "/estimator/packages" },
  ],
}

function Layout() {
  const location = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<
    Array<{ label: string; path: string }>
  >([])

  const getBreadcrumbs = useCallback(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean)
    const currentPath = pathSegments[0]

    // Reset breadcrumbs for new path
    setBreadcrumbs([])

    // If we have a custom mapping for this path, use it
    if (currentPath && BREADCRUMB_MAPPING[currentPath]) {
      return BREADCRUMB_MAPPING[currentPath]
    }

    // Otherwise, generate breadcrumbs from the URL
    let path = ""
    return pathSegments.map((segment) => {
      path += `/${segment}`
      const formattedSegment = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      return {
        label: formattedSegment,
        path,
      }
    })
  }, [location.pathname])

  useEffect(() => {
    const newBreadcrumbs = getBreadcrumbs()
    setBreadcrumbs(newBreadcrumbs)
  }, [location.pathname, getBreadcrumbs])

  // Add this to check if we should show breadcrumbs
  const shouldShowBreadcrumbs = useCallback(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean)
    return pathSegments[0] !== "user"
  }, [location.pathname])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="mx-5">
        {shouldShowBreadcrumbs() && (
          <header className="flex h-16 border-b-2 border-gray shrink-0 items-center gap-2">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <>
                <Separator orientation="vertical" className="h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                      <React.Fragment key={breadcrumb.path}>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                          {index === breadcrumbs.length - 1 ? (
                            <BreadcrumbPage className="text-blue">
                              {breadcrumb.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link to={breadcrumb.path}>
                                {breadcrumb.label}
                              </Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </>
            </div>
          </header>
        )}

        <div className="flex flex-1 flex-col gap-4 py-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
