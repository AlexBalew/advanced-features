import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    SuspenseDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/constants/constants';

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
addDecorator(SuspenseDecorator);
