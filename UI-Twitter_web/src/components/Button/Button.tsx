import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    style: 'df' | 'twt' | 'flw';
}

export function Button({ children, asChild, style = 'df' }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
        className={ clsx(
            'py-2 rounded-full text-center font-sans font-bold text-sm w-56 h-12', 
            { 
                'bg-Primary_Blue text-White': style === 'df',
                'bg-Primary_Blue text-White w-24 disabled:opacity-50': style === 'twt',
                'text-Primary_Blue border-2 w-28 ': style === 'flw',
             } )}
        >
            {children}
        </Comp>
    )
}