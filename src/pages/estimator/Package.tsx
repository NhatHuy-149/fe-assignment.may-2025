import WorkPackage from "./WorkPackage"
import SideCategories from "./SideCategories"
import { Button } from "@/components/ui/button"
import { MenuList } from "@/assets/icons/MenuList"
import { ArrowRight } from "lucide-react"

export default function Package() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl text-gray-800 font-medium mb-6">
        Work Packages (WP)
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SideCategories />
        <WorkPackage />
      </div>
      <div className="w-full flex justify-between">
        <Button size="sm" className="bg-transparent">
          <MenuList />
          <p className="italic">How to add custom WPs</p>
        </Button>
        <Button size="sm" className="bg-transparent border border-blue rounded-xl">
          <p>Next</p>
          <ArrowRight/>
        </Button>
      </div>
    </div>
  )
}
