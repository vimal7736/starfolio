import { cva } from "class-variance-authority"

export const checkboxVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center rounded transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-inset)] border border-border",
        raised: "bg-background shadow-[var(--shadow-raised)] border border-border",
        flat: "bg-background border-2 border-border",
      },
      size: {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

