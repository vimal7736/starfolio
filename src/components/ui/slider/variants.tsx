import { cva } from "class-variance-authority"

export const sliderVariants = cva(
  "w-full appearance-none bg-transparent cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        raised: "",
        flat: "",
      },
      size: {
        sm: "h-1",
        default: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

