import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { separatorVariants } from "./variants"

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, variant, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          separatorVariants({ variant, orientation }),
          className
        )}
        {...props}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator }

