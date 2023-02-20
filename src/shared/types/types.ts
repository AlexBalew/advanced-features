export const enum Theme {
    Dark = 'app_dark_theme',
    Light = 'app_light_theme',
    Purple = 'app_purple_theme',
}

export interface IThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void,
}

export const enum RadiusType {
    Circle = '50%',
}
