import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        userName: 'User X',
        password: 'Y',
    },
})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
    loginForm: {
        userName: 'User X',
        password: 'Y',
        error: 'terrible error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {
        userName: 'User X',
        password: 'Y',
        isLoading: true,
    },
})];
