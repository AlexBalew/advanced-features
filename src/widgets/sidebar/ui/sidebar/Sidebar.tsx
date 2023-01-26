import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/utils';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
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
            className={classNames(classes.root, { [classes.collapsed]: collapsed }, [className])}
        >
            <button
                type="button"
                onClick={onToggle}
            >
                {collapsed ? '+' : '-'}

            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher className={classes.theme} />
                <LangSwitcher />
            </div>
        </div>
    );
};
