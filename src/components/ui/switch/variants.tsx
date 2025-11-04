import { cva } from "class-variance-authority"

export const switchVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer rounded-full transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-inset)]",
        raised: "bg-background shadow-[var(--shadow-raised)]",
        flat: "bg-background border border-border",
      },
      size: {
        sm: "h-4 w-7",
        default: "h-5 w-9",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

