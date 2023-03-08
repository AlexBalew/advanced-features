import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/constants';
import { TextSize, TextTheme } from '../constants';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'lorem ipsum',
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'Title',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
    title: 'Title',
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.Dark)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
    text: 'lorem ipsum',
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.Dark)];

export const TextWuthError = Template.bind({});
TextWuthError.args = {
    title: 'Title',
    text: 'lorem ipsum',
    theme: TextTheme.Error,
};

export const TextWuthErrorDark = Template.bind({});
TextWuthErrorDark.args = {
    title: 'Title',
    text: 'lorem ipsum',
    theme: TextTheme.Error,
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimarySizeS = Template.bind({});
PrimarySizeS.args = {
    title: 'Title',
    text: 'lorem ipsum',
    size: TextSize.S,
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    title: 'Title',
    text: 'lorem ipsum',
    size: TextSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    title: 'Title',
    text: 'lorem ipsum',
    size: TextSize.L,
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    title: 'Title',
    text: 'lorem ipsum',
    size: TextSize.XL,
};
