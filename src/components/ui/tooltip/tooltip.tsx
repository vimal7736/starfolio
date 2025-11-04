import * as React from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  className?: string
}

export function Tooltip({ children, content, className }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <div
      className="relative inline-block w-full"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-3 py-2 text-sm text-foreground bg-[var(--color-bg-secondary)] rounded-lg shadow-[var(--shadow-raised-lg)] border border-border",
            "top-full left-1/2 -translate-x-1/2 mt-2",
            "before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-[var(--color-bg-secondary)]",
            "min-w-max",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}

