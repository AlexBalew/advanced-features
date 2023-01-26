import { useTheme } from 'app/providers';
import { FC } from 'react';
import { classNames } from 'shared/utils';
import LightTheme from 'shared/assets/icons/light-mode.svg';
import DarkTheme from 'shared/assets/icons/dark-mode.svg';
import { Theme } from 'shared/types';
import { AppButtonTheme } from 'shared/ui/types';
import { Button } from 'shared/ui';
import classes from './ThemeSwitcher.module.scss';

interface IProps {
    className?: string;
}

export const ThemeSwitcher: FC<IProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(classes.root, {}, [className])}
            theme={AppButtonTheme.Pure}
            onClick={toggleTheme}
        >
            {theme === Theme.Dark ? <DarkTheme /> : <LightTheme />}
        </Button>
    );
};
