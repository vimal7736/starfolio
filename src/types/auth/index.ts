export * from "./login"

export interface User {
  username: string
  email: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  isLoading: boolean
  error: string | null
}

