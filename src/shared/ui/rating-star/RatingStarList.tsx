import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/utils';
import { Star } from './star';
import classes from './RatingStarList.module.scss';

interface IProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const RatingStarList = memo(({
    className,
    size,
    selectedStars = 0,
    onSelect,
}: IProps) => {
    const [currentStarCount, setCurrentStarCount] = useState<number>(selectedStars);
    const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));

    const onHover = useCallback((starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    }, [isSelected]);

    const onLeave = useCallback(() => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    }, [isSelected]);

    const onClick = useCallback((starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    }, [isSelected, onSelect]);

    return (
        <div className={classNames(classes.root, {}, [className])}>
            {stars.map((starNumber) => (
                <Star
                    key={starNumber}
                    size={size}
                    name={currentStarCount >= starNumber ? 'StarFilled' : 'StarEmpty'}
                    starNumber={starNumber}
                    isSelected={isSelected}
                    onHover={onHover(starNumber)}
                    onLeave={onLeave}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
