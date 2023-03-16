import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import MainPage from './MainPage';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'main page',
};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'main page',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
