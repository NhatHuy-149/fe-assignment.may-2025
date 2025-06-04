import { Button } from "@/components/ui/button"
import { workPackages } from "@/constant/estimator"
import { Search, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ShoppingCartIcon } from "@/assets/icons/ShoppingCartIcon"

function WorkPackage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search packages..." className="pl-8" />
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col gap-4 border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-black ">{pkg.title}</h3>
                <ChevronRight className="w-6 h-6 " />
              </div>
              <p className="text-sm text-muted-foreground ">
                {pkg.description}
              </p>
              <div className="flex gap-1">
                <ChevronRight className="w-6 h-6 bg-blue-50 border-gray border-[1px]" />
                <ChevronRight className="w-6 h-6 bg-blue-50 border-gray border-[1px]" />
              </div>
              <div className="flex justify-between items-center">
                <Button size="sm" className="bg-[#f3f4f6] rounded-lg">
                  View Detail
                </Button>
                <ShoppingCartIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkPackage
