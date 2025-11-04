import { cva } from "class-variance-authority"

export const progressVariants = cva(
  "w-full rounded-full overflow-hidden transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-inset)]",
        raised: "bg-background shadow-[var(--shadow-raised)]",
        flat: "bg-background border border-border",
      },
      size: {
        sm: "h-2",
        default: "h-3",
        lg: "h-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

