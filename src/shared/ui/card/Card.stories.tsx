import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { ThemeDecorator } from 'shared/config/storybook';
import { enGB } from 'shared/dictionaries';
import { Text } from '../text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text title={enGB.USERNAME} text={enGB.ADD_YOUR_COMMENT} />,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: <Text title={enGB.USERNAME} text={enGB.ADD_YOUR_COMMENT} />,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
