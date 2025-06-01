
import type { Activity, Assignee, Ticket } from '@/types/ticket'

export const assignees: Assignee[] = [
  {
    id: '1',
    name: 'Trangntt',
    email: 'trangntt@example.com',
    avatar: '/avatars/trangntt.jpg'
  },
  {
    id: '2',
    name: 'User 1',
    email: 'user1@example.com',
    avatar: '/avatars/user1.jpg'
  },
  {
    id: '3',
    name: 'User 2',
    email: 'user2@example.com',
    avatar: '/avatars/user2.jpg'
  }
]

export const activities: Activity[] = [
  {
    id: 1,
    status: true,
    content: "RFX David Nguyen Submitted to underwriting",
    time: "2025-04-04 13:00:38",
  },
  {
    id: 2,
    status: false,
    content: "ABC Lisa Rose approval",
    time: "2025-04-04 11:10:38",
  },
  {
    id: 3,
    status: true,
    content: "RFX David Nguyen Submitted to underwriting",
    time: "2025-04-04 08:00:00",
  },
  {
    id: 4,
    status: false,
    content: "ABC Lisa Rose create an issue",
    time: "2025-04-03 17:10:38",
  },
]

export const ticketData: Ticket = {
  id: 'TICKET-001',
  title: 'Implement New Feature',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
  status: 'in-progress',
  priority: 'critical',
  type: 'feature',
  assignee: assignees[0], // Trangntt
  startDate: '2025-04-04',
  targetDate: '2025-05-04',
  activities: activities
}

export const properties = [
  {
    title: "Status",
    type: "select",
    defaultValue: "in-progress",
    options: [
      { value: "in-progress", name: "In-Progress" },
      { value: "completed", name: "Completed" },
      { value: "pending", name: "Pending" }
    ]
  },
  {
    title: "Priority",
    type: "select",
    defaultValue: "critical",
    options: [
      { value: "critical", name: "Critical" },
      { value: "high", name: "High" },
      { value: "medium", name: "Medium" },
      { value: "low", name: "Low" }
    ]
  },
  {
    title: "Type",
    type: "select",
    defaultValue: "bug",
    options: [
      { value: "bug", name: "Bug" },
      { value: "feature", name: "Feature" },
      { value: "improvement", name: "Improvement" }
    ]
  },
  {
    title: "Assignee",
    type: "select",
    defaultValue: "trangntt",
    options: [
      { value: "trangntt", name: "Trangntt" },
      { value: "user1", name: "User 1" },
      { value: "user2", name: "User 2" }
    ]
  },
  {
    title: "Started date",
    type: "select",
    defaultValue: "2025-04-04",
    options: [
      { value: "2025-04-04", name: "2025-04-04" }
    ],
    disabled: true
  },
  {
    title: "Target date",
    type: "select",
    defaultValue: "2025-05-04",
    options: [
      { value: "2025-05-04", name: "2025-05-04" }
    ],
    disabled: true
  }
]