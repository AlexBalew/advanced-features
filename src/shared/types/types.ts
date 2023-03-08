import { Theme } from '../constants';

export interface IThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void,
}

export const enum RadiusType {
    Circle = '50%',
}

export type SortType = 'asc' | 'desc';
