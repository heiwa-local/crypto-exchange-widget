import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const ArrowDownIcon: React.FC<IconProps> = ({
    ...restProps
}) => {
    return (
        <Icon width={16} height={16} viewBox="0 0 16 16" fill="none" color="#80A2B6" {...restProps}>
            <path
                d="M8.01077 10.9999C8.23471 10.998 8.44916 10.907 8.60872 10.7461L12.7459 6.5096C12.9081 6.34428 12.9995 6.11977 13 5.88545C13.0005 5.65113 12.9101 5.42621 12.7486 5.26016C12.5872 5.0941 12.3679 5.00052 12.1391 5C11.9103 4.99948 11.6907 5.09207 11.5285 5.25738L8 8.87057L4.47151 5.25739C4.39121 5.17553 4.29595 5.11067 4.19118 5.0665C4.08641 5.02234 3.97417 4.99975 3.86087 5C3.74757 5.00026 3.63542 5.02337 3.53084 5.068C3.42626 5.11264 3.33129 5.17793 3.25135 5.26016C3.17141 5.34238 3.10808 5.43992 3.06495 5.54721C3.02182 5.65449 2.99975 5.76943 3 5.88545C3.00025 6.00147 3.02282 6.11631 3.06641 6.2234C3.11 6.33049 3.17376 6.42774 3.25405 6.5096L7.39127 10.7461C7.47288 10.8285 7.56971 10.8933 7.67608 10.9369C7.78244 10.9804 7.89623 11.0019 8.01077 10.9999Z"
                fill="currentColor"
            />
        </Icon>
    );
};

const CloseIcon: React.FC<IconProps> = ({
    ...restProps
}) => {
    return (
        <Icon width={12} height={12} viewBox="0 0 12 12" fill="none" color="#80A2B6" {...restProps}>
            <path
                d="M10.1787 1.26318L6.00003 5.44187L1.82134 1.26318L1.26318 1.82134L5.44187 6.00003L1.26318 10.1787L1.82134 10.7369L6.00003 6.55815L10.1787 10.7369L10.7369 10.1787L6.55815 6.00003L10.7369 1.82134L10.1787 1.26318Z"
                fill="currentColor"
            />
        </Icon>
    );
};

const SwapIcon: React.FC<IconProps> = ({
    ...restProps
}) => {
    return (
        <Icon width={24} height={24} viewBox="0 0 24 24" fill="none" color="#11B3FE" {...restProps}>
            <g clip-path="url(#clip0_8_87)">
                <path d="M7.99 17H20V19H7.99V22L4 18L7.99 14V17Z" fill="currentColor"/>
                <path d="M16.01 8H4V10H16.01V13L20 9L16.01 5V8Z" fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_8_87">
                    <rect width="24" height="24" fill="none"/>
                </clipPath>
            </defs>
        </Icon>
    );
};

export const Icon: React.FC<IconProps> & IconExtension = ({
    ...restProps
  }) => {
    return (
        <svg {...restProps}></svg>
    )
  };
  
type IconExtension = {
    ArrowDown: typeof ArrowDownIcon;
    Close: typeof CloseIcon;
    Swap: typeof SwapIcon;
}

Icon.ArrowDown = ArrowDownIcon;
Icon.Close = CloseIcon;
Icon.Swap = SwapIcon;