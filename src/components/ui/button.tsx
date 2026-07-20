import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(17,189,242,0.4)] hover:shadow-[0_0_30px_rgba(17,189,242,0.7)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow",
        outline: "border border-primary/50 bg-transparent hover:bg-primary/10 hover:text-primary shadow",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-[#11BDF2] to-[#62D3F6] text-[#231F20] shadow-[0_4px_20px_rgba(17,189,242,0.5)] hover:shadow-[0_8px_30px_rgba(17,189,242,0.8)] border border-white/10 font-bold",
        gold: "bg-gradient-to-r from-[#2F2B2C] to-[#231F20] text-white shadow-[0_4px_20px_rgba(35,31,32,0.4)] hover:shadow-[0_8px_30px_rgba(35,31,32,0.7)]",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-[18px]",
        sm: "h-9 rounded-[12px] px-4",
        lg: "h-14 rounded-[24px] px-10 text-lg",
        icon: "h-11 w-11 rounded-[18px]",
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
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
