import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-bebas text-base tracking-wider uppercase font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[#0070c0] text-white font-bold shadow-[0_4px_15px_rgba(0,112,192,0.3)] hover:shadow-[0_6px_25px_rgba(0,112,192,0.6)] hover:bg-[#005ba3]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow",
        outline: "border border-slate-200 bg-white text-[#0F172A] hover:bg-sky-50/50 hover:border-sky-300 shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#0070c0] underline-offset-4 hover:underline",
        premium: "bg-[#0070c0] text-white font-bold shadow-[0_4px_20px_rgba(0,112,192,0.4)] hover:shadow-[0_8px_30px_rgba(0,112,192,0.7)] hover:bg-[#005ba3] border border-white/20",
        gold: "bg-[#0070c0] text-white font-bold shadow-[0_4px_20px_rgba(0,112,192,0.4)] hover:shadow-[0_8px_30px_rgba(0,112,192,0.7)] hover:bg-[#005ba3]",
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
