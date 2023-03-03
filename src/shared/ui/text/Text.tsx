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

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapTextSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
    [TextSize.XL]: 'h1',
};

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

    const HeaderTag = mapTextSizeToHeaderTag[size];

    return (
        <div className={classNames(classes.root, mods, [className, classes[theme]])}>
            {title && <HeaderTag className={classes.title}>{title}</HeaderTag>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
