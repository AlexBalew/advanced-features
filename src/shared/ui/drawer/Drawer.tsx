import { useTheme } from 'app/providers/theme-provider';
import { memo, ReactNode } from 'react';
import { Theme } from 'shared/constants';
import { classNames, Mode } from 'shared/utils/classNames';
import { Overlay } from '../overlay';
import { Portal } from '../portal';
import classes from './Drawer.module.scss';

interface IProps {
    className?: string;
    children: ReactNode;
    isOpened: boolean;
    onClose: () => void;
}

export const Drawer = memo(({
    children,
    isOpened,
    className,
    onClose,
}: IProps) => {
    const { theme } = useTheme();

    const mods: Mode = {
        [classes.opened]: isOpened,
    };

    return (
        <Portal>
            <div className={classNames(classes.root, mods, [className, theme, 'app_drawer'])}>
                <div className={classes.content}>
                    <Overlay onClick={onClose} />
                    {children}
                </div>
            </div>
        </Portal>
    );
});
