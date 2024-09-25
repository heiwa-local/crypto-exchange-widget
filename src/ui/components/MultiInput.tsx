import React, { useState } from 'react';
import cn from 'classnames';
import { Wrapper } from './Wrapper';
import { Divider } from './Divider';
import { DropdownList, DropdownListItemProps } from './DropdownList';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { Image } from './Image';

interface MultiInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    value1?: any;
    value2?: any;
    dropdownItems?: DropdownListItemProps[]
    onChangeValue1?: (val: any) => void;
    onChangeValue2?: (val: any) => void;
}

export const MultiInput: React.FC<MultiInputProps> = ({
    className,
    value1: initialValue1 = '',
    value2: initialValue2 = '',
    dropdownItems: initialDropdownItems = [],
    onChangeValue1,
    onChangeValue2,
    ...props
}) => {

    const [value1, setValue1] = useState(initialValue1)
    const [value2, setValue2] = useState(initialValue2)
    const [searchValue, setSearchValue] = useState('')
    const [dropdownItems, setDropdownItems] = useState(initialDropdownItems)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleValue1Change = (event: any) => {
        setValue1(event.target.value)
        onChangeValue1 && onChangeValue1(event.target.value)
    }

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event.target.value)
        setDropdownItems(initialDropdownItems.filter((item) => item.label.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) || item.description?.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    }

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleDropdownSelect = (key: any) => {
        setIsDropdownOpen(false)
        setSearchValue('')
        setValue2(initialDropdownItems.find((item) => item.key === key)?.key)
        onChangeValue2 && onChangeValue2(key)
    }

    const handleSearchClose = (key: any) => {
        setIsDropdownOpen(false)
        setSearchValue('')
        setDropdownItems(initialDropdownItems)
    }

    return (
        <Wrapper className={cn(className, 'multi-input')}>
            <Wrapper
                className={cn('multi-input__inner', isDropdownOpen && 'multi-input__inner_dropdown-open')}
            >
                {isDropdownOpen ? (
                    <>
                        <Input
                            type='text'
                            className={'multi-input__single-input'}
                            value={searchValue}
                            placeholder='Search'
                            onChange={handleSearchValueChange}
                        />
                        <IconButton
                            className={'multi-input__close-button'}
                            iconName='close'
                            onClick={handleSearchClose}
                        />
                    </>
                ) : (
                    <>
                        <Input 
                            {...props}
                            className={'multi-input__single-input'}
                            value={value1}
                            onChange={handleValue1Change}
                        />
                        <Wrapper
                            className='multi-input__divider-wrapper'
                        >
                            <Divider />
                        </Wrapper>
                        <MultiInputSelect
                            value={dropdownItems.find(dropdownItem => dropdownItem.key === value2)?.label}
                            onDropdownClick={handleDropdownClick}
                            leadingImageSrc={dropdownItems.find(dropdownItem => dropdownItem.key === value2)?.leadingImageSrc}
                        />
                    </>
                )}
            </Wrapper>
            <DropdownList
                className='multi-input__dropdown-list'
                isOpen={isDropdownOpen}
                items={dropdownItems}
                onSelect={handleDropdownSelect}
            />
        </Wrapper>
    )
}

interface MultiInputSelectProps {
    leadingImageSrc?: string
    value: any,
    onDropdownClick?: () => void,
}

const MultiInputSelect: React.FC<MultiInputSelectProps> = ({
    leadingImageSrc,
    value,
    onDropdownClick,
    ...restProps
}) => {

    const handleDropdownClick = () => {
        if (onDropdownClick) onDropdownClick()
    }

    return (
        <Wrapper className='multi-input-select'>
            <Wrapper className='multi-input-select__content-wrapper'>
                {leadingImageSrc && (
                    <Wrapper className='multi-input-select__leading-image-wrapper'>
                        <Image className='multi-input-select__leading-image' src={leadingImageSrc}/>
                    </Wrapper>
                )}
                <span className='multi-input-select__label'>{value}</span>
            </Wrapper>
            <IconButton
                className='multi-input-select__dropdown-button'
                iconName='arrowDown'
                onClick={handleDropdownClick}
            />
        </Wrapper>
    )
}