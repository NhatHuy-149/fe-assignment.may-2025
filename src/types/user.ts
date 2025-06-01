export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: string;
  experience: string;
  status: 'ACTIVE' | 'INACTIVE';
  website: string;
  image:string
}

export type FilterType = 'select' | 'input' | 'checkbox'

export interface FilterOption {
  value: string
  label: string
}

export interface FilterConfig {
  title: string
  type: FilterType
  name: string
  placeholder?: string
  options?: FilterOption[]
}