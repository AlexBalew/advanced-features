import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Button } from './Button';
import { AppButtonTheme } from '../types';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Pure = Template.bind({});
Pure.args = {
    children: 'Text',
    theme: AppButtonTheme.Pure,
};

export const PureDark = Template.bind({});
PureDark.args = {
    children: 'Text',
    theme: AppButtonTheme.Pure,
};
PureDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: AppButtonTheme.Outline,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: AppButtonTheme.Outline,
};
OutlineDark.decorators = [ThemeDecorator(Theme.Dark)];
