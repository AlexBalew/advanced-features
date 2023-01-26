/* eslint-disable no-unused-vars */
export const enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export interface IThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void,
}
