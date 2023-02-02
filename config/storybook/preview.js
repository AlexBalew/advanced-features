import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/types/types';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.Light));
addDecorator(RouterDecorator);
