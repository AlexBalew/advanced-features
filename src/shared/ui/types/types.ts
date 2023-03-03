export const enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const enum AppButtonTheme {
    Pure = 'pure',
    Pure_inverted = 'pureInverted',
    Outline = 'outline',
    Outline_Red = 'outlineRed',
    Background = 'background',
    Background_inverted = 'backgroundInverted',
}

export const enum AppButtonSize {
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
    Xl = 'size-xl',
}

export const enum TextTheme {
    Primary = 'primary',
    Inverted = 'inverted',
    Error = 'error',
}

export const enum TextAlign {
    Right = 'right',
    Left = 'left',
    Center = 'center',
}

export interface SelectOption<T extends string> {
    value: T;
    label: string;
}

export const enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export const enum CardTheme {
    Common = 'common',
    Outline = 'outline',
}
