import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from 'shared/constants';
import { ThemeContext } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.Dark:
            newTheme = Theme.Light;
            break;
        case Theme.Light:
            newTheme = Theme.Purple;
            break;
        case Theme.Purple:
            newTheme = Theme.Dark;
            break;
        default: newTheme = Theme.Light;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.Light, toggleTheme };
};
