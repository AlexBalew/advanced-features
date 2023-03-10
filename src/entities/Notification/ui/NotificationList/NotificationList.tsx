import { memo } from 'react';
import { Column, Skeleton } from 'shared/ui';
import { classNames } from 'shared/utils';
import { useGetNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem';
import classes from './NotificationList.module.scss';

interface IProps {
    className?: string;
}

export const NotificationList = memo(({ className }: IProps) => {
    const { data: notifications, isLoading } = useGetNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <Column
                gap="16"
                max
                className={classNames(classes.root, {}, [className])}
            >
                <Skeleton width="100%" border="10px" height="80px" />
                <Skeleton width="100%" border="10px" height="80px" />
                <Skeleton width="100%" border="10px" height="80px" />
                <Skeleton width="100%" border="10px" height="80px" />
            </Column>
        );
    }

    return (
        <Column
            gap="16"
            max
            className={classNames(classes.root, {}, [className])}
        >
            {notifications?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    item={notification}
                />
            ))}
        </Column>
    );
});
