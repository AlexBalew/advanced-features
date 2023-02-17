import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { ThemeDecorator } from 'shared/config/storybook';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Article details here',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Article details here',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
