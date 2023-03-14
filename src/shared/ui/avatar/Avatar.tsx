import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/utils';
import { Mode } from '@/shared/utils/classNames';
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

    return (
        <img
            src={src}
            style={styles}
            className={classNames(classes.root, mods, [className])}
            alt={alt}
        />
    );
});
