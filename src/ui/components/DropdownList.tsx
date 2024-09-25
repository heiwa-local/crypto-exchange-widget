import React from 'react';
import cn from 'classnames';
import { Image } from './Image';
import { Wrapper } from './Wrapper';

interface DropdownListProps {
    className?: string
    isOpen?: boolean
    items: DropdownListItemProps[]
    onSelect?: (key: any) => void
}

export const DropdownList: React.FC<DropdownListProps> = ({
    className,
    isOpen = false,
    items,
    onSelect,
    ...props
}) => {

    const handleSelect = (key: any) => {
        onSelect && onSelect(key)
    }

    return (
        <ul
            className={cn(className, 'dropdown-list', isOpen ? 'dropdown-list_active' : 'dropdown-list_hidden' )}
            {...props}
        >
            {items.map((item) => (
                <DropdownListItem
                    className='dropdown-list__item'
                    key={item.key}
                    leadingImageSrc={item.leadingImageSrc}
                    label={item.label}
                    description={item.description}
                    onClick={() => handleSelect(item.key)}
                />
            ))}
        </ul>
    )
}

export interface DropdownListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    className?: string,
    key?: any,
    leadingImageSrc?: string,
    label: string,
    description?: string,
    onClick?: () => void
}

const DropdownListItem: React.FC<DropdownListItemProps> = ({
    className,
    key,
    leadingImageSrc,
    label,
    onClick,
    description,
    ...props
}) => {

    const handleClick = () => {
        if (onClick) onClick()
    }

    return (
        <li 
            className={cn(className, 'dropdown-list-item')}
            key={key}
            onClick={handleClick}
            {...props}
        >
            {leadingImageSrc && (
                <Wrapper className='dropdown-list-item__leading-image-wrapper'>
                    <Image
                        className='dropdown-list-item__leading-image'
                        src={leadingImageSrc}
                    />
                </Wrapper>
            )}
            <span
                className='dropdown-list-item__label'
            >
                {label}
            </span>
            <span
                className='dropdown-list-item__description'
            >
                {description}
            </span>
        </li>
    )
}