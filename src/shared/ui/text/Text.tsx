import { FC } from 'react';
import { classNames } from 'shared/utils';
import { TextTheme } from '../types';
import classes from './Text.module.scss';

interface IProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: FC<IProps> = ({
    className,
    title,
    text,
    theme = TextTheme.Primary,
}) => (
    <div className={classNames(classes.root, {}, [className, classes[theme]])}>
        {title && <p className={classes.title}>{title}</p>}
        {text && <p className={classes.text}>{text}</p>}
    </div>
);
