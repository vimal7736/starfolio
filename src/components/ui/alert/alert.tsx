import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { alertVariants } from "./variants"

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
  description?: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {title && <div className="font-semibold text-foreground mb-1">{title}</div>}
        {description && <div className="text-sm text-[var(--color-text-muted)]">{description}</div>}
        {children}
      </div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert }

