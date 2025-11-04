import { cva } from "class-variance-authority"

export const cardVariants = cva(
  "rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        raised: "bg-background shadow-[var(--shadow-raised-lg)]",
        inset: "bg-background shadow-[var(--shadow-inset-lg)]",
        flat: "bg-background border border-border",
        elevated: "bg-background shadow-[var(--shadow-raised-2xl)] hover:shadow-[var(--shadow-raised-3xl)]",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "raised",
      size: "default",
    },
  }
)
