import { memo } from 'react';
import { classNames } from 'shared/utils';
import { Mode } from 'shared/utils/classNames';
import { TextAlign, TextTheme } from '../types';
import classes from './Text.module.scss';

interface IProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(({
    className,
    title,
    text,
    theme = TextTheme.Primary,
    align = TextAlign.Left,
}: IProps) => {
    const mods: Mode = {
        [classes[align]]: true,
    };

    return (
        <div className={classNames(classes.root, mods, [className, classes[theme]])}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
