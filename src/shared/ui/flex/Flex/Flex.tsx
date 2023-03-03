import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/utils';
import { Mode } from 'shared/utils/classNames';
import classes from './Flex.module.scss';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type FlexAlign = 'center' | 'start' | 'end';
type FlexJustify = 'center' | 'start' | 'end' | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '20' | '32';

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    align?: FlexAlign;
    justify?: FlexJustify;
    direction?: FlexDirection;
    max?: boolean;
    gap?: FlexGap;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: classes.justifyStart,
    center: classes.justifyCenter,
    end: classes.justifyEnd,
    between: classes.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: classes.alignStart,
    center: classes.alignCenter,
    end: classes.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: classes.directionRow,
    column: classes.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: classes.gap4,
    8: classes.gap8,
    16: classes.gap16,
    20: classes.gap20,
    32: classes.gap32,
};

export const Flex = ({
    className,
    children,
    align = 'center',
    direction = 'row',
    justify = 'start',
    max,
    gap,
}: FlexProps) => {
    const cls = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],

    ];

    const mode: Mode = {
        [classes.max]: max,
    };

    return (
        <div className={classNames(classes.root, mode, cls)}>
            {children}
        </div>
    );
};
