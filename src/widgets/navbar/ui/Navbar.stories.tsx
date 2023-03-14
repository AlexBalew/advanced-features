import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/constants';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({

})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
Dark.decorators = [StoreDecorator({

})];

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {};
// LoggedIn.decorators = [StoreDecorator({
//     user: {
//         authData: {
//             id: '1',
//             userName: 'Neo',
//         },
//     },
// })];
