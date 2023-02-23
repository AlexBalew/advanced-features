import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/utils';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { Button } from 'shared/ui/button';
import { AppButtonSize, AppButtonTheme } from 'shared/ui/types';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../sidebar-item/SidebarItem';
import classes from './Sidebar.module.scss';
import { getSidebarItemsData } from '../../model';

interface IProps {
    className?: string;
}

export const Sidebar = memo(({ className }: IProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const sidebarItemList = useSelector(getSidebarItemsData);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const linkItems = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            key={item.linkTitle}
            item={item}
            collapsed={collapsed}
        />
    )), [sidebarItemList, collapsed]);

    return (
        <menu
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
                {linkItems}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher className={classes.theme} />
                <LangSwitcher shortened={collapsed} />
            </div>
        </menu>
    );
});
