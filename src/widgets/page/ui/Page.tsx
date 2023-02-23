import {
    memo,
    MutableRefObject,
    ReactNode,
    useRef,
} from 'react';
import { classNames } from 'shared/utils';
import { useInfiniteScroll } from 'shared/utils/hooks';
import classes from './Page.module.scss';

interface IProps {
    className?: string;
    children: ReactNode;
    onEndScroll?: () => void;
}

export const Page = memo(({ className, children, onEndScroll }: IProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onEndScroll,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(classes.root, {}, [className])}
        >
            {children}
            <div
                className={classes.triggerRef}
                ref={triggerRef}
            />
        </section>
    );
});
