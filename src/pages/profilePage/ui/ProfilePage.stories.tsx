import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'profile page',
};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'profile page',
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({}),
];
