import { useState } from 'react';
import { classNames } from 'shared/utils';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { Button } from 'shared/ui/button';
import { AppButtonTheme } from 'shared/ui/types';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

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
                theme={AppButtonTheme.Background_inverted}
                className={classes.collapsedBtn}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}

            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher className={classes.theme} />
                <LangSwitcher />
            </div>
        </div>
    );
};
