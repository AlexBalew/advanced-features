import { memo } from 'react';
import {
    AppLink,
    Card,
    CardTheme,
    Text,
} from '@/shared/ui';
import { classNames } from '@/shared/utils';
import { INotification } from '../../model';
import classes from './NotificationItem.module.scss';

interface IProps {
    className?: string;
    item: INotification
}

export const NotificationItem = memo(({ className, item }: IProps) => {
    const content = (
        <Card
            theme={CardTheme.Outline}
            className={classNames(classes.root, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink
                className={classes.link}
                to={item.href}
                target="_blank"
                replace
            >
                {content}
            </AppLink>
        );
    }

    return content;
});
