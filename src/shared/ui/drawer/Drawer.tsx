import { useTheme } from 'app/providers/theme-provider';
import { memo, ReactNode } from 'react';
import { DRAWER_CLOSE_DELAY } from 'shared/constants';
import { classNames, Mode } from 'shared/utils/classNames';
import { useModal } from 'shared/utils/hooks';
import { Overlay } from '../overlay';
import { Portal } from '../portal';
import classes from './Drawer.module.scss';

interface IProps {
    className?: string;
    children: ReactNode;
    isOpened: boolean;
    lazy?: boolean;
    onClose: () => void;
}

export const Drawer = memo(({
    children,
    isOpened,
    className,
    lazy,
    onClose,
}: IProps) => {
    const { theme } = useTheme();
    const {
        isClosing,
        isMounted,
        close,
    } = useModal({ animationDelay: DRAWER_CLOSE_DELAY, isOpened, onClose });

    const mods: Mode = {
        [classes.opened]: isOpened,
        [classes.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.root, mods, [className, theme, 'app_drawer'])}>
                <div className={classes.content}>
                    <Overlay onClick={close} />
                    {children}
                </div>
            </div>
        </Portal>
    );
});
