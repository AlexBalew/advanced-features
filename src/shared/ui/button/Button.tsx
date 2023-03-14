import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/utils';
import { AppButtonSize, AppButtonTheme } from '../constants';
import classes from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button = memo(({
    className,
    children,
    theme = AppButtonTheme.Outline,
    square = false,
    disabled = false,
    fullWidth = false,
    size = AppButtonSize.M,
    ...otherProps
}: IProps) => {
    const mods: Record<string, boolean> = {
        [classes.square]: square,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
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
