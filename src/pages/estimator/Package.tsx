import WorkPackage from "./WorkPackage"
import SideCategories from "./SideCategories"

export default function Package() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl text-gray-800 font-medium mb-6">
        Work Packages (WP)
      </h1>
      <div>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SideCategories />
          <WorkPackage />
        </div>
      </div>
    </div>
  )
}
