import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleListView } from '@/entities/Article';
import { ViewSwitcher } from './ViewSwitcher';

export default {
    title: 'features/ViewSwitcher',
    component: ViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ViewSwitcher>;

const Template: ComponentStory<typeof ViewSwitcher> = (args) => <ViewSwitcher {...args} />;

export const ListView = Template.bind({});
ListView.args = {
    view: ArticleListView.List,
};

export const TilesView = Template.bind({});
TilesView.args = {
    view: ArticleListView.Tiles,
};
