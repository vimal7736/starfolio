import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { User, AuthState } from "@/types"

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
}

const storedAuth = localStorage.getItem("isAuthenticated")
const storedUser = localStorage.getItem("user")

if (storedAuth === "true" && storedUser) {
  initialState.isAuthenticated = true
  initialState.user = JSON.parse(storedUser)
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.user = action.payload
      state.error = null
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.error = null
      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("user")
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions
export default authSlice.reducer

