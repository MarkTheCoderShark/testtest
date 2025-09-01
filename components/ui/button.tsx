import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus-visible:ring-primary-600",
        secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:ring-secondary-600",
        ghost: "hover:bg-secondary-100 hover:text-secondary-900 focus-visible:ring-secondary-600",
        link: "text-primary-600 underline-offset-4 hover:underline focus-visible:ring-primary-600",
        accent: "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
