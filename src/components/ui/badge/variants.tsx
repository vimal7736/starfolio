import { cva } from "class-variance-authority"

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-background shadow-[var(--shadow-raised-sm)] border-[var(--color-border-light)] text-foreground",
        secondary:
          "bg-[var(--color-bg-secondary)] shadow-[var(--shadow-raised-sm)] border-[var(--color-border-secondary)] text-secondary",
        destructive:
          "bg-[var(--color-bg-danger-light)] shadow-[var(--shadow-danger-sm)] border-[var(--color-bg-danger-lighter)] text-[var(--color-text-danger-dark)]",
        success:
          "bg-[var(--color-bg-success)] shadow-[var(--shadow-success-sm)] border-[var(--color-bg-success-light)] text-success",
        warning:
          "bg-[var(--color-bg-warning)] shadow-[var(--shadow-warning-sm)] border-[var(--color-bg-warning-light)] text-warning",
        info:
          "bg-[var(--color-bg-info)] shadow-[var(--shadow-info-sm)] border-[var(--color-bg-info-light)] text-info",
        outline:
          "border-border bg-transparent text-foreground shadow-[var(--shadow-inset-sm)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
