import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const provinces: { [key: string]: string[] } = {
  "Hà Nội": ["Cầu Giấy", "Đống Đa", "Ba Đình"],
  "Đà Nẵng": ["Liên Chiểu", "Hải Châu", "Sơn Trà"],
  "Hồ Chí Minh": ["Quận 1", "Quận 3", "Tân Bình"],
}

export default function VietnameseAddressInput({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  const [province, setProvince] = useState("")
  const [district, setDistrict] = useState("")
  const [street, setStreet] = useState("")

  useEffect(() => {
    if (province && district && street) {
      onChange(`${province}, ${district}, ${street}`)
    }
  }, [province, district, street])

  return (
    <div className="space-y-2 flex flex-col gap-4">
      <Label>Tỉnh / Thành phố</Label>
      <Select onValueChange={setProvince}>
        <SelectTrigger>{province || "Chọn tỉnh"}</SelectTrigger>
        <SelectContent>
          {Object.keys(provinces).map((p) => (
            <SelectItem key={p} value={p}>
              {p}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>Phường / Xã</Label>
      <Select onValueChange={setDistrict}>
        <SelectTrigger>{district || "Chọn phường"}</SelectTrigger>
        <SelectContent>
          {(provinces[province] || []).map((d) => (
            <SelectItem key={d} value={d}>
              {d}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>Đường và số nhà</Label>
      <Input value={street} onChange={(e) => setStreet(e.target.value)} />
    </div>
  )
}
