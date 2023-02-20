import { memo } from 'react';
import { classNames } from 'shared/utils';
import { Mode } from 'shared/utils/classNames';
import { TextAlign, TextSize, TextTheme } from '../types';
import classes from './Text.module.scss';

interface IProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({
    className,
    title,
    text,
    theme = TextTheme.Primary,
    align = TextAlign.Left,
    size = TextSize.M,
}: IProps) => {
    const mods: Mode = {
        [classes[align]]: true,
        [classes[size]]: true,
    };

    return (
        <div className={classNames(classes.root, mods, [className, classes[theme]])}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
