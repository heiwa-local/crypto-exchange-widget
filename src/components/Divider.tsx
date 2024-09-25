import React from "react"

interface DividerProps {
    className?: string;
}

export const Divider: React.FC<DividerProps> = ({
    className,
}, ...restProps) => {

    return (
        <div
            {...restProps}
            className={className}
        />
    )
}