import { ComponentStory, ComponentMeta } from '@storybook/react';
import { enGB } from 'shared/dictionaries';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const PrimaryRowGap16 = Template.bind({});
PrimaryRowGap16.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '16',
};

export const RowGap16JustifyCenter = Template.bind({});
RowGap16JustifyCenter.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '16',
    justify: 'center',
};

export const RowGap16JustifySpaceBetween = Template.bind({});
RowGap16JustifySpaceBetween.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '16',
    justify: 'between',
};

export const RowGap16JustifyEnd = Template.bind({});
RowGap16JustifyEnd.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '16',
    justify: 'end',
};

export const PrimaryColumnGap16 = Template.bind({});
PrimaryColumnGap16.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '16',
};

export const ColumnGap16AlignStart = Template.bind({});
ColumnGap16AlignStart.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '16',
    align: 'start',
};

export const ColumnGap16AlignEnd = Template.bind({});
ColumnGap16AlignEnd.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '16',
    align: 'end',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '8',
};

export const RowGap20 = Template.bind({});
RowGap20.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '20',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    gap: '32',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '4',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '8',
};

export const ColumnGap20 = Template.bind({});
ColumnGap20.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '20',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    children: (
        <>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
            <div>{enGB.ELEMENT}</div>
        </>
    ),
    direction: 'column',
    gap: '32',
};
