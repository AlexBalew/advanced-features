import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppSelect } from './AppSelect';

export default {
    title: 'shared/AppSelect',
    component: AppSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const PrimaryTopLeft = Template.bind({});
PrimaryTopLeft.args = {
    options: [
        {
            label: 'Durward Reynolds',
            value: 'Durward Reynolds',
            disabled: false,
        },
        { label: 'Kenton Towne', value: 'Kenton Towne', disabled: false },
        { label: 'Therese Wunsch', value: 'Therese Wunsch', disabled: false },
        {
            label: 'Benedict Kessler',
            value: 'Benedict Kessler',
            disabled: true,
        },
        { label: 'Katelyn Rohan', value: 'Katelyn Rohan', disabled: false },
    ],
    defaultLabel: 'Choose option Choose option',
    selectLabel: 'Person',
    direction: 'top left',
};

export const PrimaryTopRight = Template.bind({});
PrimaryTopRight.args = {
    options: [
        {
            label: 'Durward Reynolds',
            value: 'Durward Reynolds',
            disabled: false,
        },
        { label: 'Kenton Towne', value: 'Kenton Towne', disabled: false },
        { label: 'Therese Wunsch', value: 'Therese Wunsch', disabled: false },
        {
            label: 'Benedict Kessler',
            value: 'Benedict Kessler',
            disabled: true,
        },
        { label: 'Katelyn Rohan', value: 'Katelyn Rohan', disabled: false },
    ],
    defaultLabel: 'Choose option Choose option',
    selectLabel: 'Person',
    direction: 'top right',
};

export const PrimaryBottomLeft = Template.bind({});
PrimaryBottomLeft.args = {
    options: [
        {
            label: 'Durward Reynolds',
            value: 'Durward Reynolds',
            disabled: false,
        },
        { label: 'Kenton Towne', value: 'Kenton Towne', disabled: false },
        { label: 'Therese Wunsch', value: 'Therese Wunsch', disabled: false },
        {
            label: 'Benedict Kessler',
            value: 'Benedict Kessler',
            disabled: true,
        },
        { label: 'Katelyn Rohan', value: 'Katelyn Rohan', disabled: false },
    ],
    defaultLabel: 'Choose option Choose option',
    selectLabel: 'Person',
    direction: 'bottom left',
};

export const PrimaryBottomRight = Template.bind({});
PrimaryBottomRight.args = {
    options: [
        {
            label: 'Durward Reynolds',
            value: 'Durward Reynolds',
            disabled: false,
        },
        { label: 'Kenton Towne', value: 'Kenton Towne', disabled: false },
        { label: 'Therese Wunsch', value: 'Therese Wunsch', disabled: false },
        {
            label: 'Benedict Kessler',
            value: 'Benedict Kessler',
            disabled: true,
        },
        { label: 'Katelyn Rohan', value: 'Katelyn Rohan', disabled: false },
    ],
    defaultLabel: 'Choose option Choose option',
    selectLabel: 'Person',
    direction: 'bottom right',
};
