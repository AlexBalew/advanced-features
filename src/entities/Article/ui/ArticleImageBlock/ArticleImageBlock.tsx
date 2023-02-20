import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/utils';
import classes from './ArticleImageBlock.module.scss';

interface IProps {
    className?: string;
}

export const ArticleImageBlock = memo(({ className }: IProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(classes.root, {}, [className])}
        // eslint-disable-next-line i18next/no-literal-string
        >
            ArticleImageBlock
        </div>
    );
});