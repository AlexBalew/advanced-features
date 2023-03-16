import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    SuspenseDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/constants/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.Light, color: '#ffffff' },
            { name: 'dark', class: Theme.Dark, color: '#000000' },
            { name: 'purple', class: Theme.Purple, color: '#7e5086' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.Light));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
