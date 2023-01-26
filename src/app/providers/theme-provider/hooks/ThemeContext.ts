import { createContext } from 'react';
import { IThemeContextProps } from 'shared/types';

export const ThemeContext = createContext<IThemeContextProps>({});
