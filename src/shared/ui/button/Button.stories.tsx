import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Button } from './Button';
import { AppButtonSize, AppButtonTheme } from '../types';

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

export const BackGroundTheme = Template.bind({});
BackGroundTheme.args = {
    children: 'Text',
    theme: AppButtonTheme.Background,
};

export const BackGroundThemeInverted = Template.bind({});
BackGroundThemeInverted.args = {
    children: 'Text',
    theme: AppButtonTheme.Background_inverted,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    square: true,
};

export const SquareS = Template.bind({});
SquareS.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    square: true,
    size: AppButtonSize.S,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    square: true,
    size: AppButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    square: true,
    size: AppButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    square: true,
    size: AppButtonSize.Xl,
};

export const SizeS = Template.bind({});
SizeS.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    size: AppButtonSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    size: AppButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    size: AppButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: '>',
    theme: AppButtonTheme.Outline,
    size: AppButtonSize.Xl,
};
