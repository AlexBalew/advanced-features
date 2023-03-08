import { StateSchema } from 'app/providers/store-provider';
import {
    getScrollPositionByPath,
    scrollSaverSliceActions,
} from 'features/ScrollSaver';
import {
    memo,
    MutableRefObject,
    ReactNode,
    useCallback,
    useRef,
    UIEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/utils';
import {
    useAppDispatch,
    useInfiniteScroll,
    useInitialEffect,
    useThrottle,
} from 'shared/utils/hooks';
import classes from './Page.module.scss';

interface IProps {
    className?: string;
    children: ReactNode;
    onEndScroll?: () => void;
}

export const Page = memo(({ className, children, onEndScroll }: IProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((
        state: StateSchema,
    ) => getScrollPositionByPath(state, pathname));

    const onScroll = useThrottle(useCallback((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaverSliceActions.setScrollPosition({
            position: e.currentTarget?.scrollTop,
            path: pathname,
        }));
    }, [dispatch, pathname]), 500);

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onEndScroll,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(classes.root, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onEndScroll && (
                <div
                    className={classes.triggerRef}
                    ref={triggerRef}
                />
            )}
        </main>
    );
});
