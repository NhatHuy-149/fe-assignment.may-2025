import { Typography } from "@/components/ui/typography"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectcustom"
import { properties } from "@/constant/ticket"
import {  ChevronRight } from "lucide-react"

function Properties() {
  return (
    <div className="w-80 space-y-4">
      <div className=" h-full md:border-l-2 bg-card md:p-4">
        <div className="flex items-center justify-between gap-2 w-full pb-4 border-b-2 border-gray">
          <Typography className="font-medium">Properties</Typography>
          <ChevronRight className="w-6 h-6" />
        </div>
        <div className="space-y-3 py-3">
          {properties.map((property) => (
            <div
              key={property.title}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-muted-foreground">
                {property.title}:
              </span>
              <Select
                defaultValue={property.defaultValue}
                disabled={property.disabled}
              >
                <SelectTrigger className={`w-[120px] ${property.title === "Priority"&&"text-blue" } ${property.title === "Status"&&"text-[#e10e0e]" }`}>
                  <SelectValue
                    placeholder={`Select ${property.title.toLowerCase()}`}
                  />
                </SelectTrigger>
                <SelectContent >
                  {property.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}  >
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Properties
