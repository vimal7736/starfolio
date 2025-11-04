import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { sliderVariants } from "./variants"

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof sliderVariants> {
  label?: string
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, variant, size, label, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || props.defaultValue || 50)
    
    React.useEffect(() => {
      if (props.value !== undefined) {
        setValue(props.value)
      }
    }, [props.value])

    return (
      <div className={cn("w-full", className)}>
        {label && <label className="block text-foreground text-sm mb-2">{label}</label>}
        <div className="relative">
          <input
            type="range"
            className={cn(sliderVariants({ variant, size }))}
            ref={ref}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              props.onChange?.(e)
            }}
            {...props}
          />
          <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-1">
            <span>{props.min || 0}</span>
            <span className="text-foreground font-semibold">{value}</span>
            <span>{props.max || 100}</span>
          </div>
        </div>
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }

