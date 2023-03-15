import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/utils';
import { CardTheme } from '../constants';
import classes from './Card.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo(({
    className,
    children,
    theme = CardTheme.Common,
    max,
    ...otherProps
}: IProps) => (
    <div
        className={classNames(classes.root, { [classes.max]: max }, [className, classes[theme]])}
        {...otherProps}
    >
        {children}
    </div>
));
