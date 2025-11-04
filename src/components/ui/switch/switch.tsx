import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { switchVariants } from "./variants"

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof switchVariants> {
  label?: string
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, variant, size, label, checked, ...props }, ref) => {
    return (
      <label className={cn("inline-flex items-center gap-2 cursor-pointer", className)}>
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          checked={checked}
          {...props}
        />
        <span className={cn(switchVariants({ variant, size }), checked && "switch-checked")}>
          <span className={cn(
            "switch-thumb absolute rounded-full bg-foreground transition-all duration-200 shadow-[var(--shadow-raised-sm)]",
            size === "sm" && "h-3 w-3 left-0.5 top-0.5",
            size === "default" && "h-4 w-4 left-0.5 top-0.5",
            size === "lg" && "h-5 w-5 left-0.5 top-0.5",
            checked && size === "sm" && "translate-x-3",
            checked && size === "default" && "translate-x-4",
            checked && size === "lg" && "translate-x-5"
          )} />
        </span>
        {label && <span className="text-foreground text-sm">{label}</span>}
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }

