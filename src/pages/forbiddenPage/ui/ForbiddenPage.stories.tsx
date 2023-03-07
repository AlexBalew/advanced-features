import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import ForbiddenPage from './ForbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Access is forbidden',
};
Primary.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Access is forbidden',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
