import { createContext } from 'react';
import { IThemeContextProps } from '../types';

export const ThemeContext = createContext<IThemeContextProps>({});