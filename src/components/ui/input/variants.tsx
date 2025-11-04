import { cva } from "class-variance-authority"

export const inputVariants = cva(
  "flex w-full rounded-lg transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-background shadow-[var(--shadow-inset-md)] border border-[var(--color-border-light)] text-foreground placeholder:text-[var(--color-text-placeholder)]",
        raised: "bg-background shadow-[var(--shadow-raised)] border border-transparent text-foreground placeholder:text-[var(--color-text-placeholder)]",
        flat: "bg-background border border-border text-foreground placeholder:text-[var(--color-text-placeholder)]",
        ghost: "bg-transparent border border-border text-foreground placeholder:text-[var(--color-text-placeholder)] hover:bg-background",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
