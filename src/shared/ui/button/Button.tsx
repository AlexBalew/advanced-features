import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/utils';
import { AppButtonSize, AppButtonTheme } from '../types';
import classes from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo(({
    className,
    children,
    theme,
    square,
    disabled,
    size = AppButtonSize.M,
    ...otherProps
}: IProps) => {
    const mods: Record<string, boolean> = {
        [classes.square]: square,
        [classes.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(classes.root, mods, [className, classes[theme], classes[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
