import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { ThemeDecorator } from 'shared/config/storybook';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Articles here',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Articles here',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
