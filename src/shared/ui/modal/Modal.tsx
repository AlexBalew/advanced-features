import { ReactNode } from 'react';
import { MODAL_CLOSE_DELAY } from '@/shared/constants';
import { classNames } from '@/shared/utils';
import { Mode } from '@/shared/utils/classNames';
import { useModal } from '@/shared/utils/hooks';
import { Overlay } from '../overlay';
import { Portal } from '../portal';
import classes from './Modal.module.scss';

interface IProps {
    className?: string;
    children?: ReactNode;
    isOpened?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = ({ className, children, isOpened, lazy, onClose }: IProps) => {
    const { isClosing, isMounted, close } = useModal({
        animationDelay: MODAL_CLOSE_DELAY,
        isOpened,
        onClose,
    });

    const mods: Mode = {
        [classes.opened]: isOpened,
        [classes.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.root, mods, [className, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={classes.content}>{children}</div>
            </div>
        </Portal>
    );
};
