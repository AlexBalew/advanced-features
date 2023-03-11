import { memo } from 'react';
import { classNames } from 'shared/utils';
import classes from './Overlay.module.scss';

interface IProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: IProps) => (
    <div onClick={onClick} className={classNames(classes.root, {}, [className])} />
));
