import { cva } from "class-variance-authority"

export const alertVariants = cva(
  "rounded-lg p-4 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-raised)] border border-border",
        success: "bg-[var(--color-bg-success)] shadow-[var(--shadow-success-sm)] border border-[var(--color-bg-success-light)]",
        warning: "bg-[var(--color-bg-warning)] shadow-[var(--shadow-warning-sm)] border border-[var(--color-bg-warning-light)]",
        danger: "bg-[var(--color-bg-danger-light)] shadow-[var(--shadow-danger-sm)] border border-[var(--color-bg-danger-lighter)]",
        info: "bg-[var(--color-bg-info)] shadow-[var(--shadow-info-sm)] border border-[var(--color-bg-info-light)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

