import { cva } from "class-variance-authority"

export const separatorVariants = cva(
  "bg-border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "shadow-[var(--shadow-inset-sm)]",
        raised: "shadow-[var(--shadow-raised-sm)]",
        flat: "border border-border",
      },
      orientation: {
        horizontal: "w-full h-px",
        vertical: "h-full w-px",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
)

