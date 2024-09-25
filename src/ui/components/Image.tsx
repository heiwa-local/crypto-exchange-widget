import cn from 'classnames';
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}

export const Image: React.FC<ImageProps> = ({
    className,
    ...restProps
}) => {
    return <img 
        className={cn(className, 'image')} 
        alt=''
        {...restProps}
    />
}