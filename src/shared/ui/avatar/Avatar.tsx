import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/utils';
import { Mode } from '@/shared/utils/classNames';
import { AppImage } from '../app-image';
import { Icon } from '../icon';
import { Skeleton } from '../skeleton';
import { RadiusType } from '@/shared/types';
import classes from './Avatar.module.scss';

interface IProps {
    className?: string;
    src?: string;
    alt: string;
    size?: number;
    radius?: string;
}

export const Avatar = memo(({
    className,
    src,
    alt,
    size,
    radius,
}: IProps) => {
    const mods: Mode = {
    };

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
        borderRadius: radius,
    }), [radius, size]);

    const errorFallback = <Icon className={classes.icon} name="ProfileALt" size={size} />;
    const fallback = <Skeleton width={size} height={size} border={RadiusType.Circle} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            className={classNames(classes.root, mods, [className])}
            alt={alt}
        />
    );
});
