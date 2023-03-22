import { useState, useCallback, useMemo } from 'react';

interface UseHoverActions {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverActions];

export const useHover = (): UseHoverResult => {
    const [hover, setHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, []);

    return useMemo(
        () => [hover, { onMouseEnter, onMouseLeave }],
        [hover, onMouseEnter, onMouseLeave],
    );
};
