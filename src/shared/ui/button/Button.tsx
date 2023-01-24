import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/utils';
import { AppButtonTheme } from '../types';
import classes from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
}

export const Button: FC<IProps> = ({ className, children, theme, ...otherProps }) => {

    return (
        <button className={classNames(classes.root, {}, [className, classes[theme]])}
            {...otherProps}>
            {children}
        </button>
    )
}