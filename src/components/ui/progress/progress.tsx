import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { progressVariants } from "./variants"

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number
  max?: number
  showLabel?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, variant, size, value = 0, max = 100, showLabel = false, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    return (
      <div className={cn("w-full", className)} {...props} ref={ref}>
        {showLabel && (
          <div className="flex justify-between text-sm text-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round(percentage)}%</span>
          </div>
        )}
        <div className={cn(progressVariants({ variant, size }))}>
          <div
            className="h-full bg-[var(--color-bg-primary)] rounded-full transition-all duration-300 shadow-[var(--shadow-raised-sm)]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }

