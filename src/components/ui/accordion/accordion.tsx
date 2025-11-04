import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { accordionVariants, accordionItemVariants, accordionTriggerVariants, accordionContentVariants } from "./variants"

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
}

const AccordionContext = React.createContext<{
  type?: "single" | "multiple"
  value?: string | string[]
  onValueChange?: (value: string) => void
}>({})

const AccordionItemContext = React.createContext<{ isOpen?: boolean }>({})

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue || (type === "multiple" ? [] : "")
    )
    const value = controlledValue !== undefined ? controlledValue : internalValue
    
    const handleValueChange = (itemValue: string) => {
      if (type === "single") {
        const newValue = value === itemValue ? "" : itemValue
        if (controlledValue === undefined) {
          setInternalValue(newValue)
        }
        onValueChange?.(newValue as string)
      } else {
        const currentValue = Array.isArray(value) ? value : []
        const newValue = currentValue.includes(itemValue)
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue]
        if (controlledValue === undefined) {
          setInternalValue(newValue)
        }
        onValueChange?.(newValue)
      }
    }

    return (
      <AccordionContext.Provider value={{ type, value, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn(accordionVariants({}), className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof accordionItemVariants> & {
      value: string
    }
>(({ className, variant, value, children, ...props }, ref) => {
  const { value: selectedValue, type } = React.useContext(AccordionContext)
  
  const isOpen = type === "single"
    ? selectedValue === value
    : Array.isArray(selectedValue) && selectedValue.includes(value)

  return (
    <AccordionItemContext.Provider value={{ isOpen }}>
      <div ref={ref} className={cn(accordionItemVariants({ variant }), className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof accordionTriggerVariants>
>(({ className, variant, children, ...props }, ref) => {
  const { onValueChange } = React.useContext(AccordionContext)
  const { isOpen } = React.useContext(AccordionItemContext)
  const itemValue = React.useContext(AccordionItemValueContext)

  return (
    <button
      ref={ref}
      className={cn(accordionTriggerVariants({ variant }), className)}
      onClick={() => onValueChange?.(itemValue)}
      {...props}
    >
      {children}
      <svg
        className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionItemValueContext = React.createContext<string>("")

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof accordionContentVariants>
>(({ className, variant, children, ...props }, ref) => {
  const { isOpen } = React.useContext(AccordionItemContext)
  
  if (!isOpen) return null

  return (
    <div ref={ref} className={cn(accordionContentVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

const AccordionItemWithValue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof accordionItemVariants> & {
      value: string
    }
>(({ value, children, ...props }, ref) => {
  return (
    <AccordionItemValueContext.Provider value={value}>
      <AccordionItem ref={ref} value={value} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return child
          }
          return child
        })}
      </AccordionItem>
    </AccordionItemValueContext.Provider>
  )
})

export { Accordion, AccordionItemWithValue as AccordionItem, AccordionTrigger, AccordionContent }
