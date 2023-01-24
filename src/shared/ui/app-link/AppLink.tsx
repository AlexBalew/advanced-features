import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/utils';
import classes from './AppLink.module.scss';
import { AppLinkTheme } from './types';

interface IProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IProps> = ({
    to,
    className,
    children,
    theme,
    ...otherProps
}) => {

    return (
        <Link
            to={to}
            className={classNames(classes.appLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}