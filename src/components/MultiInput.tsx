import React, { useState } from 'react';
import cn from 'classnames';
import { Wrapper } from './Wrapper';
import { Divider } from './Divider';
import { DropdownList, DropdownListItemProps } from './DropdownList';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { Image } from './Image';


const dropdownItems1: DropdownListItemProps[]  = [
    {
        key: '1',
        label: 'BTC',
        leadingImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
        description: 'Bitcoin'
    },
    {
        key: '2',
        label: 'ETH',
        leadingImageSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX///8AXs4AbfC92/8kiP8AXc4Aa/DC3/8AZO8AWs0AV8wAZe8AaPDD4P/A3f8AYe8AVcsAgf8EcPIAU8uwx/kmiv/y+P8Afv8dhv8cgfsAYdUNdPQCa+kAY9oAX+8le/K01f2fxfZcmPWavfmqzvrj7/5zo+ja6//O4/+10P+myv+Ouv83k/+Wt/js9f+HsfhMmv+QuvE1hPNsn/ZZkOAOZdEfbNOFsu5lp/+Erfc1edhWjt9tn+ZKhtxHjPRAf9p7pvZfo/82kP8AXd6jwvlNkfVnQUA3AAAP8UlEQVR4nO1daXfiuBIF3JYNNiZLQ0JIAtmBdEID2fful/7/f+nJBhK0WqoSJHMOd77MhzmT3NxS3aqSLBUKK6ywwgorrLDCCisY4/Ksm3g9ip8UvY531vjq38gRGide//zuV3Nra2s9Q5OEUUhR298no7eL9/8y08tu//5PnRJrbm//+EB9qzQDIXEU1cL2eJCcfPUva41L7/x3neM2ZdgkJRYkjsN4dNg7++pf2hxnR7+bMnITbPMMp3KGceve++pf3QCN7qC+1VSQmzDckDCcilmLxr3vvS67g796emmYtmQifpAMS+Nvq2Sj/2u9qWc3STUahhOSrcF3XJPdu/X1HPWmDNe1BKfhOup8NSEOnd9bRvRSCMlUSrLWfv9GK7L/10y+CbYNCKYcw9b55Vczm6Bft+FHoUymPMeIDL6aHEWvvm5Fz4JhyrF29MWx6v2y0a8+QcuYYRarP7+Q38kfE34TWj+2t5tTtHZ3SyVjIUk46n4VwfNcfhmz5vpWa4PWZbMUSvaKKfydvb1dI54kHH9JqAZ/9faekaPcUmasP+wW57CzRxXNIxrHvaXzu7zXCkjpNVPhSjLvYxhOaO7mqElqh0tusJK6RsB6fXt9gxdOyzAFDVldKRCT/jIJDtQVTEZPrp2eYUZSL+PSVuPZb6UF1rebBl6gYpitSnW4xq1gOQR76v5oe2uDGFSdaobZmlQ3kOHRMgiqPIKGp67zM2ao40jCw4Xzu1REaL3eNJLPhCH1yj0Vx6i94Jx6VlcI2GwZ8zNgSKHSkZBkkQSTH1KCaXya8zNjqORIogW6f1+6BOvbW1b8TBmq1iOpXSyK4NGWPECt2FkwpAYpl3H/bTEEz2U5hgaoNUFzhjRUpf+DcLw8guva6gXPsLgjlTFagGu8SQjWt7WlpBOGRV+6GqN/rgnKFKQrEERQWZcqIF2NrlWUEgSsQBBDmlRlFJ2uxSORYP0HlKA9Q7k3hm/uCPZFm4BGKJChNFJr564IJhIFjQbXEqSd4x6AoZyio+rmTCzV5jZyLRH3YwJiKLMNEjmpUS/FYlu7QaYneNe9i3dADItFCUXiotP4Ldai4BxDWp2k0/KBDCUFDmnjCQ6ERQh2CSrhIPCCQQXK0Bcp4m2x55IgaSee5yU3YBElroEdbJyJMxk4wVI0TBkGw00wQzFQSYib+f/iCSIULJGXqpei+loGMxQDlbQwQ0ZhEWIIUqdIMobJ8RpcRDGjxoilmPC1TN4pAz3BceBNUL0CJxuZL8KNX3BCQDv/idQppgyTzjU82YgU4a543+QJIhQsxfczCamIpwgRi3vC/xoYpwG/CA2PGMhBWt48MCKKCTWExWmdX4Swhn72SxwFcwRRjiFSJDEknw74GMWk0RIZVRkNqw9wxyiKCTUGtMNnXIyissynU8yQHGBWothLAXz/D5dHUYuQ5oLAYxE8oijy5RsZ2RL0eAlRi5CUjhOOYXJcxCQbYSmGtodSuHKtvo4hWIrfqh6P6hNKRN4VbfsovqXAxSjZEPilwInIL0XLJoMbXMCb+gzROb8Ks5V4i3IMPk5JaEOwz0qIK2ZoFpARpBRxjsHHaWQxemtwBSkuRkvxkE8zThyDz6ekZG77vIQory/F/+QSUhGfUSLyvh+Z7yv+5dIMLkaJ4BQfIh77LpONeS/c4SXEOcVYdIoZUI2iKGL4bsiQnR9i0wxR8ktRdiqioSd2t1xKGA1UqzBbibeYgYbgGDWzTzXunErYVi3C6VK8QSUbXsQXE4INbhWiCtJSfKSTMG0UkY7B/riayTzjnWWIlPBFT5BSRIwWRREjk8P9bM2NTaR9fZCmjuEynZrkmi4rIc4L40O1U8yAdAxOxDA/17DDC/hGYfYXJZ1cgp7XwTkGyzB/nNFg6xn1x4ImiN7yVmG2ElGjRa46za9rWDPEWQVpG/BLgdiMElqMWscuSFF5Jpa2hRIRb3Eisj80L0zZvgk3Ax7l5dEZElSjyOYaEusJnrFBmv8xpAZRrlN8MDzAdPt8mOpPLxyxQYrJM/G/fKeYoYpqFLkw1Zs+21ZgzFDTFkpEPMY4BhemWtO/dGeG8Z1ZmpkgeEL0GFyYxrralJ0DY4KUtEzM/hMdjGNwZY1uI+qc0RCTSWNtWygREeMYrOlr/YJZhpi9mLy2UATmDMoO+7M1WxjstjbG7kPFAFHDEOEYPptqNJveXF8BX4bxi7lTzIA5g8L6Rah2RHZOCl+GJLZwig8REY7B7uxr2mDmaAKi6v48V2KDAN4o7pmmGjbRgN3Q1ilmgJ9B2TH0/IajRDN/rsQGiDMo3EJU9Ygn7KAUmmjsnWIGuGOwDGuqy1/YigZclIY5A0Q14GdQ2IUYqT6KZlIp/Kw6wClmADsGx1C1CcXUbODeMD6ABmlq+0DHYFNN/KZgeOcilYrnSmwAdQyuqlHVbb/mlyEwlUrOlViJ2AEeX2A2cQlRMHTR38vOldgA6hhcMlUwZGc0IIKkhVEwUxFm+yzDfTnBS9YOQUEaGg4Q1QCeQWFbRIUhsnM2kB2aDxA1IoJGi6xdKOZtXbzh5281GTAEnUFhGYYdKcOENXwIQeW5EhuAzqBwDOWjGg/LENQWigA1ihxD+UHFHpZhfIdzihkgpxbZoiZaDENScsIvhb3ts8OoBTHUnyuxAcAxlqGh8W6hCawdYxka5p0rsYH9GZQlaEj+VV0k0gkS682oJWhIWof9qhsVg+rBlW11umPiFkg/JPH/bk47AbryDjq3N5vWjmjk+NiaZqfoV8rPQw8RrUnVGz6X1wDdhRFDXF06uSjBL1dung6A0RpUj59u1mBzDKO6FNVbfN4iQIV8uLUXksp3+1quQMeJRr0Foj/kbrooVypXB57FkkwC7+CqDJQvg1F/CO/xxWsg/PLmzemxYbQm1ePTBwy9omGPD53TKK4q8SvF12GSG61JEAyfi2u4Q/umc5pfkG2LXfUtF355rfh0HGhPQQfHT9dI+TKYzdoA89LdnHtK/Mrmw21HIWRS7dw+bIKTCwOzean9zHt6I7D2Z5cr148HiShkVrnkRKcxeW7mfa9gaLtvMdMvT4fUJE87TNqh8p3eVPTRmWYrU4aG+xZ2e08f8Vl+pGsp77etbL4OZ/5BBR2+5v9Vrq+OH00TELvNHar2niz2D5n1t3bV9dJ8mBOta9dXNFrpP7Ry2cyJzopP/yDdK+ODUob7h8Z7wHz+3Dytpp6WVzBn1c7x7UNO5TLx0iCoWnT6zK9HIuU5YaN9fEn69CvDgMZecnDl50QrJVfRy1eulNPElKRdMDDRaM7u5Z/FULiDXz4IvEltmaeQFnM1bWCzlbhjehYj5zzN7p7S3f3r6ag06w9yVpkK5c3rj74kObbpgY3P0+jORGlql+y3u/GSmRHQtLNmLaRfWXseftQGiWf1PRR3FEN9+4DqXFte5ZJRfLVzO5bexDHnSh+rDX3zc22fqSZ7sIG2+bs0Mg1/0cojc7WHQcUyQ1b1MOVrYO4TKczPJhbOt9MLTbKXKNa3Wi27q+PWnpihflp1vuZHK43OV75yrVqeGLY4X9qLpn+GTGxieTne5i23b5Ga+7XOJKn10e6DL1ptjDCDxRnhs5hxCMtLKv21IV9gJzRan4sKCyynHWRVGAUEB5ajKJtz3gWujrFjSFuBA7GHyHokMVpp8/hwKuurAusrQWzO6hfuY4ah7R2O5ZuOrBWk1c4Tm3Zob6yY5CQd6+9mrb638GrMf219l2r5RtHspu1EZSqkX6nQykUxqLL/MNjum5lChApT6hnPqsFMkNbm1CTTiap6RpU8W++O2n33VBjjwpRSvFLOZdKZ4eP141AzZ4Sc+rL8dq2HDFNK8VSz150E2p2NKuCrC9vvDxsbyDCltjiEbueDzpfafkPKhyngzt9pKwUgCDp7afsdcMELsWH62UrZwa5hmsH+W27e9CHXGn+2UjYE7RqmGQB3fwwitIjF8oN9nAYP+NNeZncqnLDZFCRice3RliLwhjrIvRiFF807cOYUn+wSKvDkLOhuk0LHhYjFNb6V0hME3lMDu5+m0HYhoqSV0oSoxeRwHsA7hgrvrGEARSz6xp4BvhELek9Ug592wxgqWikJQfuGaQLwXV+8YcCea0g9w1BD4JUKPiehxX1tl/wLVTCGtJUyutvEvmGaAHHnniAiLNmku1IGN/BAP8UX7k20eh65xokIfZJiTddKTQieQu8aQN19WTji0ilURL9ym3vXF3AjB3l/qZBOwRR9bSsVHEBvTsTeQVv4yYkIjlO/qPEM8IdcknuErS8tH/G7h8DfRGeLYCN0cRd0ocuLCI3TYuVVQdDzXqGfNru4z5sfZ4B9P92VkifUqt0O0zxc3MleaMR8nEKXoqKVAhuhq3v1+cEiYimKu1Ie6ipo4T0d4NsIhX98nIKXol8WWqlgCD6vJyxC8DssJ8IDqnCKRa6VQlw67/CNkkJfiFNwtilfM56RdK6hPiG+M7OPeGDukI9TBEW2lYLfQScQRD3bJRRviIQ6vysF2GGawvV7T4UgdEfx0zMwPiEsQuSbXUKTgaG4OW2lqqfufAL97hpdipFDitmuVBV8g8lC3s4TZospoOkma6XgDZPk/cPYwfuHEleEUyxfHwdwn1jUG5aFJHJI8QbcMMneIY0DFwRlBSq8uikX3RF09pZsoXDhkKKjqUyKffP5aC7eRM8obYBTKgDSN51VX1WAMBY9A1HB2WIJ73JLbRHRathB+rZ66PhtddosyijCzd8Csggthf9cE1SouHgZZTnUTSkjYixJN7kn3LGQClgKHa/BGd72ZT9tkTJKVyC1CadZdB4X/IbNFAtKqjtyAUnNoQ/y6EkKuAwLCFUFP1qqOatkZEgkZfgkVF1zVPArxcRRLarCSVuaUh1z9BULkCbRtpNuQotDcbAx4+hoPariMx1ZLMQleBwpKeq+/XLAjxJEjyzMELSEIeMcSRTHnT01v1LcQg6dzNE43Nd9JAwmqaNHTeIQNTa0RI9oZASRTNXT/dlislCTEHGiTjgTbNisyZ1dnXoTARefQ3n0Yr2MmZT5LKl2u6W8Ozjixbq8Co1xjowzmpSnhKi/s6ddd3MChuNlrsB5dEdmHFNsUKafyFVtnt9oaSlUgl7bnCMIJGzbPkftGI2jUFWNu+AXhUdfFaBzGJQWxJFExOow3uLQuGgtIFZJ2Lr4BvpN0XhvK5pjML9a+/378MvgvdScBSuJai+dryYkwcl5KxROGQHoxWF7sPwCxhDeuFVDkSRxbWNs+NHEF6HRGUdQkpReNO58s9UnRTJoxzRebWgSGptxe/C91WNw0huPSBgZiUniOCSjce/brj0lTrqDcTuqRZFKTipcFNXC9njQ/e+x+0DjrH/xNiL7+7WQIpog/dfa/j4ZvV30z/4L684IZ0mn93OGXidRXce1wgorrLDCCiussIIE/wd/Jf80I0zjvAAAAABJRU5ErkJggg==',
        description: 'Etherium'
    },
    {
        key: '3',
        label: 'LTC',
        leadingImageSrc: 'data:image/png;base64,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',
        description: 'Etherium'
    }
]

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
    dropdownItems: initialDropdownItems = dropdownItems1,
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