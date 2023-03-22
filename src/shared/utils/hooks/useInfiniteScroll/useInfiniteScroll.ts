import { MutableRefObject, useEffect } from 'react';

interface IProps {
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export function useInfiniteScroll({ wrapperRef, triggerRef, callback }: IProps) {
    useEffect(() => {
        let observer: IntersectionObserver | null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshhold: 1.0,
            };

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback?.();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
