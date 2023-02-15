import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import Batman from 'shared/assets/tests/batman-test.jpg';
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
Primary.args = {
    data: {
        username: 'User X',
        firstname: 'Bob',
        lastname: 'Doe',
        age: 23,
        country: Countries.SPAIN,
        city: 'Madrid',
        currency: Currency.EUR,
        avatar: Batman,
    },
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    error: 'error',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    isLoading: true,
};
