import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none',
    {
        variants: {
            variant: {
                primary:
                    'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80',
                outline:
                    'border hover:bg-fd-accent hover:text-fd-accent-foreground',
                ghost: 'hover:bg-fd-accent hover:text-fd-accent-foreground',
                secondary:
                    'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                login: 'bg-primary-gradient text-klave-dark-blue hover:shadow-primary transition-shadow duration-200 ease-in'
            },
            size: {
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
                sm: 'gap-1 px-2 py-1.5 text-xs',
                icon: 'p-1.5 [&_svg]:size-5',
                'icon-sm': 'p-1.5 [&_svg]:size-4.5',
                'icon-xs': 'p-1 [&_svg]:size-4'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default'
        }
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export type ButtonProps = VariantProps<typeof buttonVariants>;
export { Button, buttonVariants };
