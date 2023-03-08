import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'shared/constants';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpened: true,
    children: 'Sed pharetra pulvinar viverra. Morbi ex sapien, venenatis ut euismod ac',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpened: true,
    children: 'Sed pharetra pulvinar viverra. Morbi ex sapien, venenatis ut euismod ac',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
