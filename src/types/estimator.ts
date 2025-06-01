export interface WorkPackage {
  id: number
  title: string
  description: string
  category:
    | "All"
    | "Architectural"
    | "Development"
    | "Operation"
    | "Basic"
    | "Comprehensive"
    | "Advanced"
}