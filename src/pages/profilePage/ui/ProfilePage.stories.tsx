import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
