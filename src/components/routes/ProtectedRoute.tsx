import { Navigate } from "react-router-dom"
import { useAppSelector } from "@/store/hooks"
import type { ProtectedRouteProps } from "@/types"

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
