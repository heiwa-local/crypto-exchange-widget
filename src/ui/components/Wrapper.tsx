import React from "react";

interface WrapperOptions extends React.CSSProperties {
    padding?: string
}

type WrapperProps = {
    className?: string;
    options?: WrapperOptions;
    children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({
    className,
    children
}, ...restProps) => {
    return (
        <div
            className={className}
        >
            {children}
        </div>
    )
}