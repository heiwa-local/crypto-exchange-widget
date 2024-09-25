import React from 'react'

interface DividerProps {
    className?: string;
}

export const Divider: React.FC<DividerProps> = ({
    className,
    ...props
}) => {

    return (
        <div
            {...props}
            className={className}
        />
    )
}