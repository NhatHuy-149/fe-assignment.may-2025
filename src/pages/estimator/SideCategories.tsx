import { Button } from "@/components/ui/button"
import { categories } from "@/constant/estimator"

function SideCategories() {
  return (
    <div className="max-w-[13rem]">
      <div className="flex items-center justify-between gap-2 rounded-lg p-1 border-gray border-[1px]">
        <Button size="sm">RFX WPs</Button>
        <Button size="sm" className="bg-transparent text-gray-80">Custom WPs</Button>
      </div>
      <div >
        <h2 className="text-gray-800 font-semibold mt-4 mb-2">Categories</h2>
        <div className="space-y-0">
          {categories.map((category) => (
            <button
              key={category}
              className="w-full text-left py-2 hover:text-blue border-b-gray border-b-2 text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideCategories
