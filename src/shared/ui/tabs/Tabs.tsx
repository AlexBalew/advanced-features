import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/utils';
import { Card } from '../card';
import { CardTheme } from '../constants';
import classes from './Tabs.module.scss';

export interface ITab {
    value: string;
    content: ReactNode;
}

interface IProps {
    className?: string;
    tabs: ITab[];
    value: string;
    onTabClick: (tab: ITab) => void;
}

export const Tabs = memo(({ tabs, value, className, onTabClick }: IProps) => {
    const onTabClickHandler = useCallback(
        (tab: ITab) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(classes.root, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.Common : CardTheme.Outline}
                    className={classes.tab}
                    onClick={onTabClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
