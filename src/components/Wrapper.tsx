import React from "react";

interface WrapperOptions extends React.CSSProperties {
    padding?: string
}

const initialWrapperOptions: WrapperOptions = {
    padding: undefined
}

type WrapperProps = {
    className?: string;
    options?: WrapperOptions;
    children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({
    className,
    options = initialWrapperOptions,
    children
}, ...restProps) => {
    const style: React.CSSProperties = {
        ...options
    }
    return (
        <div
            className={className}
            style={style}
        >
            {children}
        </div>
    )
}