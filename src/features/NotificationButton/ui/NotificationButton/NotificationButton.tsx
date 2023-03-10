import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import { AppButtonTheme, Button, Icon } from 'shared/ui';
import { AppPopover } from 'shared/ui/popups';
import { classNames } from 'shared/utils';
import classes from './NotificationButton.module.scss';

interface IProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: IProps) => (
    <AppPopover
        className={classNames('', {}, [className])}
        trigger={(
            <Button theme={AppButtonTheme.Pure}>
                <Icon
                    name="Notification"
                    className={classes.icon}
                />
            </Button>
        )}
    >
        <NotificationList className={classes.notifications} />
    </AppPopover>
));
