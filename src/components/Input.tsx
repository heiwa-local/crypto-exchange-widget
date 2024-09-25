import cn from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({
    className,
    ...restProps
}) => {
    return (
        <input
            className={cn(className, "input")}
            {...restProps}
        />
    )
}