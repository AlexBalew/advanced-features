import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import {
    AppButtonTheme,
    Button,
    Drawer,
    Icon,
} from '@/shared/ui';
import { AppPopover } from '@/shared/ui/popups';
import { classNames } from '@/shared/utils';
import { AnimationProvider } from '@/shared/utils/components';
import classes from './NotificationButton.module.scss';

interface IProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: IProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const onCloseDrawer = useCallback(() => {
        setIsOpened(false);
    }, []);

    const onOpenDrawer = useCallback(() => {
        setIsOpened(true);
    }, []);

    const trigger = (
        <Button theme={AppButtonTheme.Pure} onClick={onOpenDrawer}>
            <Icon
                name="Notification"
                className={classes.icon}
            />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <AppPopover
                    className={classNames('', {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={classes.notifications} />
                </AppPopover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpened={isOpened} onClose={onCloseDrawer} lazy>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </>

    );
});
