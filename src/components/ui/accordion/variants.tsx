import { cva } from "class-variance-authority"

export const accordionVariants = cva("w-full space-y-2")

export const accordionItemVariants = cva(
  "rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-raised)]",
        inset: "bg-background shadow-[var(--shadow-inset)]",
        flat: "bg-background border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-foreground transition-all duration-150 hover:bg-[var(--color-bg-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "",
        inset: "",
        flat: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const accordionContentVariants = cva(
  "overflow-hidden px-4 pb-3 text-sm text-[var(--color-text-muted)] transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        inset: "",
        flat: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

