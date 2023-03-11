import {
    MutableRefObject,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { MODAL_CLOSE_DELAY } from 'shared/constants';
import { classNames } from 'shared/utils';
import { Mode } from 'shared/utils/classNames';
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

export const Modal = ({
    className,
    children,
    isOpened,
    lazy,
    onClose,
}: IProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, MODAL_CLOSE_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    const mods: Mode = {
        [classes.opened]: isOpened,
        [classes.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpened) {
            setIsMounted(true);
        }
    }, [isOpened]);

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onClose, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.root, mods, [className, 'app_modal'])}>
                <Overlay onClick={onCloseHandler} />
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
