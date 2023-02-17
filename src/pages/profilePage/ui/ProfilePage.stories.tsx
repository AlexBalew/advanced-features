import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/types';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Countries } from 'entities/Counrty';
import Wick from 'shared/assets/tests/wick.jpg';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'User X',
            firstname: 'Bob',
            lastname: 'Doe',
            age: 23,
            country: Countries.SPAIN,
            city: 'Madrid',
            currency: Currency.EUR,
            avatar: Wick,
        },
        data: {
            username: 'User X',
            firstname: 'Bob',
            lastname: 'Doe',
            age: 23,
            country: Countries.SPAIN,
            city: 'Madrid',
            currency: Currency.EUR,
            avatar: Wick,
        },
    },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        profile: {
            form: {
                username: 'neo',
                firstname: 'Bob',
                lastname: 'Doe',
                age: 23,
                country: Countries.SPAIN,
                city: 'Madrid',
                currency: Currency.EUR,
                avatar: Wick,
            },
            data: {
                username: 'User X',
                firstname: 'Bob',
                lastname: 'Doe',
                age: 23,
                country: Countries.SPAIN,
                city: 'Madrid',
                currency: Currency.EUR,
                avatar: Wick,
            },
        },
    }),
];
