import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/utils';
import { AppButtonTheme } from '../types';
import classes from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
}

export const Button: FC<IProps> = ({
    className, children, theme, square, ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [classes.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(classes.root, mods, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
