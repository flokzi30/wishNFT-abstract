import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary-main text-white hover:bg-primary-dark",
        secondary:
          "border-transparent bg-secondary-main text-white hover:bg-secondary-dark",
        destructive:
          "border-transparent bg-error-main text-white hover:bg-error-dark",
        outline: "text-grey-900 border-grey-200",
        success:
          "border-transparent bg-success-main text-white hover:bg-success-dark",
        warning:
          "border-transparent bg-warning-main text-white hover:bg-warning-dark",
        info:
          "border-transparent bg-info-main text-white hover:bg-info-dark",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants } 