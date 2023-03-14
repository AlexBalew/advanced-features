import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/constants';
import { AppLinkTheme } from '../constants';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    theme: AppLinkTheme.Primary,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
    theme: AppLinkTheme.Primary,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'text',
    theme: AppLinkTheme.Secondary,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'text',
    theme: AppLinkTheme.Secondary,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.Dark)];
