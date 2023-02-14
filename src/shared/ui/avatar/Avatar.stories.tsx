import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import Wick from './WickJohn_S.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: Wick,
    size: 100,
};
