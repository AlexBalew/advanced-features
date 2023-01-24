import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => {

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.Secondary} to={'/'} className={classes.mainLink}>Main page</AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>About</AppLink>
            </div>
        </div>
    )
}