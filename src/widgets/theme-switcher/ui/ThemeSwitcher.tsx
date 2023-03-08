import { useTheme } from 'app/providers';
import { memo } from 'react';
import { classNames } from 'shared/utils';
import { AppButtonTheme, Button, Icon } from 'shared/ui';
import { Theme } from 'shared/constants';
import classes from './ThemeSwitcher.module.scss';

interface IProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: IProps) => {
    const { theme, toggleTheme } = useTheme();

    const getIconClassName = (theme: Theme) => {
        let className: string;
        switch (theme) {
        case Theme.Dark:
            className = classes.primary;
            break;
        case Theme.Light:
            className = classes.purple;
            break;
        case Theme.Purple:
            className = classes.primary;
            break;
        default: className = classes.primary;
        }

        return className;
    };

    return (
        <Button
            className={classNames(classes.root, {}, [className])}
            theme={AppButtonTheme.Pure}
            onClick={toggleTheme}
        >
            <div className={getIconClassName(theme)}>
                <Icon
                    name="Settings"
                    className={classes.icon}
                />
            </div>
        </Button>
    );
});
