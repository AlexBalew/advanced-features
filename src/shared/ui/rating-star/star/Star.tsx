import { memo, useCallback } from 'react';
import { classNames } from '@/shared/utils';
import { Icon, IconName, StarIconName } from '../../icon';
import { Mode } from '@/shared/utils/classNames';
import classes from './Star.module.scss';

interface IProps {
    name?: StarIconName;
    starNumber?: number;
    size?: number;
    currentStarCount?: number;
    isSelected?: boolean;
    onLeave: () => void;
    onHover: (starsCount: number) => void;
    onClick: (starsCount: number) => void;
}

export const Star = memo(({
    name,
    starNumber = 1,
    size,
    isSelected,
    currentStarCount = 0,
    onHover,
    onLeave,
    onClick,
}: IProps) => {
    const mods: Mode = {
        [classes.default]: true,
        [classes.hovered]: currentStarCount >= starNumber,
        [classes.isSelected]: isSelected,
    };

    const onHoverHandler = useCallback((starsCount: number) => () => {
        onHover(starsCount);
    }, [onHover]);

    const onClickHandler = useCallback((starsCount: number) => () => {
        onClick(starsCount);
    }, [onClick]);

    return (
        <Icon
            size={size}
            className={classNames(classes.root, mods, [])}
            name={name as IconName}
            onMouseOut={onLeave}
            onMouseOver={onHoverHandler(starNumber)}
            onClick={onClickHandler(starNumber)}
        />
    );
});
