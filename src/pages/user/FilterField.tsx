import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { FilterConfig } from "@/types/user"

interface FilterFieldProps {
  filter: FilterConfig
  value: any
  onChange: (name: string, value: any) => void
}

function FilterField({ filter, value, onChange }: FilterFieldProps) {
  const renderFilterField = () => {
    switch (filter.type) {
      case "input":
        return (
          <Input
            placeholder={filter.placeholder}
            className="w-full rounded-lg"
            value={value}
            onChange={(e) => onChange(filter.name, e.target.value)}
          />
        )

      case "select":
        return (
          <Select
            value={value}
            onValueChange={(value) => onChange(filter.name, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {filter.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

      case "checkbox":
        return (
          <div className="space-y-2">
            {filter.options?.map((option) => (
              <div key={option.value} className="flex items-center">
                <Checkbox
                  id={option.value}
                  checked={value?.includes(option.value)}
                  onCheckedChange={() => {
                    if (option.value === "all") {
                      onChange(filter.name, ["all"])
                      return
                    }
                    const newValue = value?.includes(option.value)
                      ? value.filter((v: string) => v !== option.value)
                      : [...value.filter((v: string) => v !== "all"), option.value]
                    onChange(filter.name, newValue)
                  }}
                />
                <label htmlFor={option.value} className="ml-2 text-sm">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return <div>{renderFilterField()}</div>
}

export default FilterField