import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { tabsVariants, tabsListVariants, tabsTriggerVariants, tabsContentVariants } from "./variants"

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const TabsContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
}>({})

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const value = controlledValue !== undefined ? controlledValue : internalValue
    const handleValueChange = (newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    return (
      <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn(tabsVariants({}), className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(tabsListVariants({ variant }), className)} {...props} />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof tabsTriggerVariants> & {
      value: string
    }
>(({ className, variant, value, ...props }, ref) => {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext)
  const isActive = selectedValue === value

  return (
    <button
      ref={ref}
      className={cn(tabsTriggerVariants({ variant, isActive }), className)}
      onClick={() => onValueChange?.(value)}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof tabsContentVariants> & {
      value: string
    }
>(({ className, variant, value, children, ...props }, ref) => {
  const { value: selectedValue } = React.useContext(TabsContext)
  
  if (selectedValue !== value) return null

  return (
    <div ref={ref} className={cn(tabsContentVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }

