import * as React from "react"
import { Tooltip } from "./tooltip"

interface TooltipHintProps {
  children: React.ReactNode
  username?: string
  password?: string
}

export function TooltipHint({ children, username, password }: TooltipHintProps) {
  const tooltipContent = React.useMemo(() => {
    if (username && password) {
      return (
        <div className="space-y-1">
          <div className="font-semibold">Demo Credentials:</div>
          <div>Username: <span className="font-mono">{username}</span></div>
          <div>Password: <span className="font-mono">{password}</span></div>
        </div>
      )
    }
    if (username) {
      return <div>Username: <span className="font-mono">{username}</span></div>
    }
    if (password) {
      return <div>Password: <span className="font-mono">{password}</span></div>
    }
    return null
  }, [username, password])

  if (!tooltipContent) {
    return <>{children}</>
  }

  return (
    <Tooltip content={tooltipContent}>
      {children}
    </Tooltip>
  )
}

