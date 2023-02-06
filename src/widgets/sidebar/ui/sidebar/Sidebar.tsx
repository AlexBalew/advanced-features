import { useState } from 'react';
import { classNames } from 'shared/utils';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { Button } from 'shared/ui/button';
import { AppButtonSize, AppButtonTheme, AppLinkTheme } from 'shared/ui/types';
import { AppLink } from 'shared/ui';
import { enGB } from 'shared/dictionaries';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import AboutUsIcon from 'shared/assets/icons/about-us-filled.svg';
import HomeIcon from 'shared/assets/icons/home-icon-filled.svg';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.root, { [classes.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                square
                size={AppButtonSize.L}
                theme={AppButtonTheme.Background_inverted}
                className={classes.collapsedBtn}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}

            </Button>
            <div className={classes.links}>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to={RoutePath.main}
                    className={classes.linkItem}
                >
                    <HomeIcon className={classes.icon} />
                    <span className={classes.link}>
                        {t(enGB.MAIN_INFO)}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to={RoutePath.about}
                    className={classes.linkItem}
                >
                    <AboutUsIcon className={classes.icon} />
                    <span className={classes.link}>
                        {t(enGB.ABOUT)}
                    </span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher className={classes.theme} />
                <LangSwitcher shortened={collapsed} />
            </div>
        </div>
    );
};
