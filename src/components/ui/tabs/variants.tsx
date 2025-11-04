import { cva } from "class-variance-authority"

export const tabsVariants = cva("w-full")

export const tabsListVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-lg p-1",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-inset)]",
        raised: "bg-background shadow-[var(--shadow-raised)]",
        flat: "bg-background border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        raised: "",
        flat: "",
      },
      isActive: {
        true: "bg-background text-foreground shadow-[var(--shadow-raised-sm)]",
        false: "text-[var(--color-text-muted)] hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  }
)

export const tabsContentVariants = cva(
  "mt-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "",
        raised: "",
        flat: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

