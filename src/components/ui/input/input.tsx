import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { inputVariants } from "./variants"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: "sm" | "default" | "lg"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

