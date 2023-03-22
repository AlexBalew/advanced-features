import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
import { AppButtonSize, AppButtonTheme, Column } from '@/shared/ui';
import { SidebarItem } from '../sidebar-item/SidebarItem';
import { getSidebarItemsData } from '../../model';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar = memo(({ className }: IProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const sidebarItemList = useSelector(getSidebarItemsData);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const linkItems = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <SidebarItem key={item.linkTitle} item={item} collapsed={collapsed} />
            )),
        [sidebarItemList, collapsed],
    );

    return (
        <aside
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
            <Column role="navigation" gap="16" className={classes.links}>
                {linkItems}
            </Column>
            <div className={classes.switchers}>
                <ThemeSwitcher className={classes.theme} />
                <LangSwitcher shortened={collapsed} />
            </div>
        </aside>
    );
});
