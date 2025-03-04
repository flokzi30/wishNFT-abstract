import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-90',
  {
    variants: {
      variant: {
        default: 'bg-primary-main text-white hover:bg-primary-dark',
        destructive:
          'bg-error-main text-white hover:bg-error-dark',
        outline:
          'border border-grey-300 bg-white hover:bg-grey-50 hover:text-primary-dark',
        secondary:
          'bg-secondary-main text-white hover:bg-secondary-dark',
        ghost: 'hover:bg-grey-100 hover:text-primary-dark',
        link: 'text-primary-main underline-offset-4 hover:underline',
        success: 'bg-success-main text-white hover:bg-success-dark',
        warning: 'bg-warning-main text-white hover:bg-warning-dark',
        info: 'bg-info-main text-white hover:bg-info-dark',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
