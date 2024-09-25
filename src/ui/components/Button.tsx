import React from 'react';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export const Button: React.FC<ButtonProps> = ({
    className,
    label,
    ...props
}) => {

    return (
        <button
            className={cn(className, 'button')}
            {...props}
        >
            <span>{label}</span>
        </button>
    )
}