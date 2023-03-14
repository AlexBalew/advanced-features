import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/utils';
import { AppLinkTheme } from '../constants';
import classes from './AppLink.module.scss';

interface IProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo(({
    to,
    className,
    children,
    theme = AppLinkTheme.Primary,
    ...otherProps
}: IProps) => (
    <Link
        to={to}
        className={classNames(classes.appLink, {}, [className, classes[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
));
