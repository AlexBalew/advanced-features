import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { MODAL_CLOSE_DELAY } from 'shared/constants';
import { classNames } from 'shared/utils';
import classes from './Modal.module.scss';

interface IProps {
    className?: string;
    children?: ReactNode;
    isOpened?: boolean;
    onClose?: () => void
}

export const Modal = ({
    className,
    children,
    isOpened,
    onClose,
}: IProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, MODAL_CLOSE_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpened,
        [classes.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onClose, onKeyDown]);

    return (
        <div className={classNames(classes.root, mods, [className])}>
            <div className={classes.overlay} onClick={onCloseHandler}>
                <div className={classes.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
