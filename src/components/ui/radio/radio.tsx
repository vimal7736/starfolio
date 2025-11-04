import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { radioVariants } from "./variants"

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof radioVariants> {
  label?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, variant, size, label, ...props }, ref) => {
    return (
      <label className={cn("inline-flex items-center gap-2 cursor-pointer", className)}>
        <input
          type="radio"
          className="sr-only"
          ref={ref}
          {...props}
        />
        <span className={cn(radioVariants({ variant, size }), props.checked && "radio-checked")}>
          {props.checked && (
            <span className={cn(
              "absolute rounded-full bg-foreground",
              size === "sm" && "h-2 w-2",
              size === "default" && "h-2.5 w-2.5",
              size === "lg" && "h-3 w-3"
            )} />
          )}
        </span>
        {label && <span className="text-foreground text-sm">{label}</span>}
      </label>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }

