import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
  {
    variants: {
      variant: {
        raised: "bg-background text-foreground shadow-[var(--shadow-raised)] hover:shadow-[var(--shadow-raised-sm)] active:shadow-[var(--shadow-inset)]",
        inset: "bg-background text-foreground shadow-[var(--shadow-inset)] hover:bg-[var(--color-bg-secondary)] active:shadow-[var(--shadow-raised)]",
        flat: "bg-background text-foreground border border-border hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-hover)]",
        elevated: "bg-background text-foreground shadow-[var(--shadow-raised-xl)] hover:shadow-[var(--shadow-raised-2xl)] active:shadow-[var(--shadow-raised)]",
        primary: "bg-[var(--color-bg-primary)] text-primary shadow-[var(--shadow-raised)] hover:bg-[var(--color-bg-primary-hover)] hover:shadow-[var(--shadow-raised-sm)] active:shadow-[var(--shadow-raised-sm)]",
        destructive: "bg-[var(--color-bg-danger)] text-danger shadow-[var(--shadow-raised)] hover:bg-[var(--color-bg-danger-hover)] hover:shadow-[var(--shadow-raised-sm)] active:shadow-[var(--shadow-raised-sm)]",
        ghost: "bg-transparent text-foreground hover:bg-background hover:shadow-[var(--shadow-raised-sm)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "raised",
      size: "default",
    },
  }
)
