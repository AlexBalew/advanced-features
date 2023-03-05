import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppSelect } from './AppSelect';

export default {
    title: 'shared/AppSelect',
    component: AppSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: [
        { label: 'Durward Reynolds', value: 'Durward Reynolds', disabled: false },
        { label: 'Kenton Towne', value: 'Kenton Towne', disabled: false },
        { label: 'Therese Wunsch', value: 'Therese Wunsch', disabled: false },
        { label: 'Benedict Kessler', value: 'Benedict Kessler', disabled: true },
        { label: 'Katelyn Rohan', value: 'Katelyn Rohan', disabled: false },
    ],
    defaultLabel: 'Choose option',
    selectLabel: 'Person',
};
