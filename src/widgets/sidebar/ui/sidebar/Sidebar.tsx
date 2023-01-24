import { useState } from 'react';
import { classNames } from 'shared/utils';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(classes.root, { [classes.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}