import {
    FC,
    ReactNode,
    useMemo,
    useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from 'shared/constants';
import { ThemeContext } from '../hooks';

interface IProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children, initialTheme }) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
