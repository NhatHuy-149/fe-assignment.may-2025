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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import VietnameseAddressInput from "./VietnameseAddressInput"

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

  return (
    <div className="container mx-auto py-6 space-y-6 grid grid-cols-2 gap-3">
      <Card>
        <CardHeader>
          <CardTitle>JSON Schema Input</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            className="min-h-[300px] mb-4"
            value={schemaText}
            onChange={(e) => dispatch(setSchemaText(e.target.value))}
          />
          <Button onClick={handleRender}>Render Form</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Form</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {schema?.properties &&
            Object.entries(schema.properties).map(([key, field]: any) => (
              <div key={key} className="space-y-1">
                <label className="block font-medium">
                  {field.title || key}
                </label>
                {renderField(key, field)}
              </div>
            ))}
          <Button className="max-w-fit" variant="destructive" onClick={() => dispatch(resetAll())}>
            Reset Data
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default JSONFormRenderer
