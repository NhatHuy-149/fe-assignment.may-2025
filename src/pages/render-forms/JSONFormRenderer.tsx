import { useDispatch, useSelector } from "react-redux"
import {
  setFormData,
  setSchemaText,
  setSchema,
  resetAll,
} from "@/store/features/formSlice"
import type { RootState } from "@/store"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import VietnameseAddressInput from "./VietnameseAddressInput"
import {  ArrowBigRight, ArrowRight } from "lucide-react"

const JSONFormRenderer = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.form.data)
  const schemaText = useSelector((state: RootState) => state.form.schemaText)
  const schema = useSelector((state: RootState) => state.form.schema)

  const handleRender = () => {
    try {
      const parsed = JSON.parse(schemaText)
      dispatch(setSchema(parsed))
    } catch (e) {
      alert("Schema không hợp lệ")
    }
  }

  const handleChange = (key: string, value: any) => {
    dispatch(setFormData({ ...formData, [key]: value }))
  }

  const renderField = (key: string, field: any) => {
    if (field.format === "vietnam-address") {
      return (
        <VietnameseAddressInput
          value={formData[key] || ""}
          onChange={(val) => handleChange(key, val)}
        />
      )
    }

    if (field.enum) {
      return (
        <Select
          onValueChange={(val) => handleChange(key, val)}
          value={formData[key] || ""}
        >
          <SelectTrigger>{formData[key] || "Chọn..."}</SelectTrigger>
          <SelectContent>
            {field.enum.map((option: string) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    }

    if (field.type === "number") {
      return (
        <Input
          type="number"
          value={formData[key] || ""}
          onChange={(e) =>
            handleChange(
              key,
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />
      )
    }

    if (field.type === "string") {
      return (
        <Input
          value={formData[key] || ""}
          onChange={(e) => handleChange(key, e.target.value)}
        />
      )
    }

    return null
  }

  const templateJson = {
    type: "object",
    properties: {
      fullName: {
        type: "string",
        title: "Họ và tên"
      },
      age: {
        type: "number",
        title: "Tuổi"
      },
      gender: {
        type: "string",
        title: "Giới tính",
        enum: ["Nam", "Nữ", "Khác"]
      },
      address: {
        type: "string",
        title: "Địa chỉ",
        format: "vietnam-address"
      }
    }
  }

  const handleUseTemplate = () => {
    const formatted = JSON.stringify(templateJson, null, 2)
    dispatch(setSchemaText(formatted))
    dispatch(setSchema(templateJson))
  }

  return (
    <div className="h-[calc(100vh-6rem)] container mx-auto py-6 flex w-full justify-between items-center gap-3">
      <Card className="min-h-0 h-full w-[46%]">
        <CardHeader>
          <CardTitle>JSON Schema Input</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto h-[calc(100%-3rem)]">
          <Textarea
            className="flex-1 h-full overflow-auto"
            value={schemaText}
            onChange={(e) => dispatch(setSchemaText(e.target.value))}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleRender} className="mr-2">Render Form</Button>
          <Button onClick={handleUseTemplate} variant="secondary">Use Template Json</Button>
        </CardFooter>
      </Card>
      <ArrowBigRight fill="#171717" className="w-14 h-14 text-[#171717]" />
      <Card className="min-h-0 h-full w-[46%]">
        <CardHeader>
          <CardTitle>Generated Form</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto h-[calc(100%-3rem)]">
          <div className="flex-1  ">
            {schema?.properties &&
              Object.entries(schema.properties).map(([key, field]: any) => (
                <div key={key} className="space-y-1 mb-4">
                  <label className="block font-medium">
                    {field.title || key}
                  </label>
                  {renderField(key, field)}
                </div>
              ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="max-w-fit"
            variant="destructive"
            onClick={() => dispatch(resetAll())}
          >
            Reset Data
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default JSONFormRenderer
