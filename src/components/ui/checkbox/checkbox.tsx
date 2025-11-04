import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { checkboxVariants } from "./variants"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, label, ...props }, ref) => {
    return (
      <label className={cn("inline-flex items-center gap-2 cursor-pointer", className)}>
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          {...props}
        />
        <span className={cn(checkboxVariants({ variant, size }), props.checked && "checkbox-checked")}>
          {props.checked && (
            <svg className="w-full h-full text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
        {label && <span className="text-foreground text-sm">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }

