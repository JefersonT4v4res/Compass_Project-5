import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
        className={ clsx(
            'px-24 py-4 rounded-full text-center bg-Primary_Blue text-White font-sans font-bold text-sm w-56 h-12' )}
        >
            {children}
        </Comp>
    )
}