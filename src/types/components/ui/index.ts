export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface VariantProps {
  variant?: string
  size?: string
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "raised" | "inset" | "flat" | "elevated" | "primary" | "destructive" | "ghost"
  size?: "sm" | "default" | "lg" | "icon" | "icon-sm" | "icon-lg"
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export interface CardProps extends BaseComponentProps {
  variant?: "raised" | "inset" | "flat" | "elevated"
}

export interface InputProps extends BaseComponentProps {
  variant?: "default" | "raised" | "flat" | "ghost"
  size?: "sm" | "default" | "lg"
  type?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  required?: boolean
  id?: string
}

export interface AlertProps extends BaseComponentProps {
  variant?: "default" | "success" | "warning" | "danger" | "info"
  title?: string
  description?: string
}

