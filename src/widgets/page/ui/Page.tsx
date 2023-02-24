import { StateSchema } from 'app/providers';
import { getScrollPositionByPath } from 'features/ScrollSaver';
import { scrollSaverSliceActions } from 'features/ScrollSaver/model/slice/scrollSaverSlice';
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
        <section
            ref={wrapperRef}
            className={classNames(classes.root, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div
                className={classes.triggerRef}
                ref={triggerRef}
            />
        </section>
    );
});
