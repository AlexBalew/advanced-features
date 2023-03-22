import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    error: 'error',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    isLoading: true,
};
