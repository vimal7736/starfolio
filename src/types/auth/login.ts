export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface LoginResponse {
  success: boolean
  user?: {
    username: string
    email: string
  }
  error?: string
}

export interface LoginError {
  message: string
  field?: "email" | "password" | "general"
}

