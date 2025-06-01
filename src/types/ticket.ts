
export type TicketStatus = 'in-progress' | 'completed' | 'pending'
export type TicketPriority = 'critical' | 'high' | 'medium' | 'low'
export type TicketType = 'bug' | 'feature' | 'improvement'

export interface Activity {
  id: number
  status: boolean
  content: string
  time: string
}
export interface Assignee {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Ticket {
  id: string
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  type: TicketType
  assignee: Assignee
  startDate: string
  targetDate: string
  activities: Activity[]
}