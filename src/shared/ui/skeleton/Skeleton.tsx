import { CSSProperties } from 'react';
import { classNames } from '@/shared/utils';
import classes from './Skeleton.module.scss';

interface IProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Skeleton = ({ border, className, height, width }: IProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(classes.root, {}, [className])} style={styles} />;
};
