import { AppLink } from 'shared/ui/app-link';
import { AppLinkTheme } from 'shared/ui/app-link/types';
import { classNames } from 'shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => {

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.Secondary} to={'/'} className={classes.mainLink}>Main page</AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>About</AppLink>
            </div>
        </div>
    )
}