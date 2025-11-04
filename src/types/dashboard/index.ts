export interface Project {
  id: string
  title: string
  description: string
  status: "active" | "completed" | "in-progress"
  technologies: string[]
  link?: string
}

export interface Skill {
  id: string
  name: string
  category: "frontend" | "backend" | "tool" | "language"
  proficiency: number
}

export interface Stats {
  projects: number
  skills: number
  experience: number
}

export interface DashboardData {
  stats: Stats
  projects: Project[]
  skills: Skill[]
}

