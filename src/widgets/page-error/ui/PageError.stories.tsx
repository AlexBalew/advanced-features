import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'shared/constants';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
