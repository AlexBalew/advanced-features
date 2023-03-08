import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/constants';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];

export const LightAuthorized = Template.bind({});
LightAuthorized.args = {};
LightAuthorized.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            userName: 'user',
        },
    },
})];

export const DarkAuthorized = Template.bind({});
DarkAuthorized.args = {};
DarkAuthorized.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
    user: {
        authData: {
            id: '1',
            userName: 'user',
        },
    },
})];
