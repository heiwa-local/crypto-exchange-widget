import { getIconByName } from '../../utils/iconPack';
import cn from 'classnames';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconName: string
}

export const IconButton: React.FC<IconButtonProps> = ({
    className,
    iconName, 
    ...restProps
}) => {
    const Icon = getIconByName(iconName);

    return (
        <button className={cn(className, "icon-button")} {...restProps}>
            {Icon && <Icon className="icon-button__icon"/>}
        </button>
    )
}