import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/constants';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    height: 100,
    width: '100%',
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    height: 200,
    width: 200,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    height: 100,
    width: '100%',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    height: 200,
    width: 200,
};
CircleDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
    height: 100,
    width: '100%',
};
PrimaryPurple.decorators = [ThemeDecorator(Theme.Purple)];

export const CirclePurple = Template.bind({});
PrimaryPurple.args = {
    border: '50%',
    height: 200,
    width: 200,
};
CirclePurple.decorators = [ThemeDecorator(Theme.Purple)];
