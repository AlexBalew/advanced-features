import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/utils';
import { AppButtonSize, AppButtonTheme } from '../types';
import classes from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
}

export const Button: FC<IProps> = ({
    className,
    children,
    theme,
    square,
    size = AppButtonSize.M,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [classes.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(classes.root, mods, [className, classes[theme], classes[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
