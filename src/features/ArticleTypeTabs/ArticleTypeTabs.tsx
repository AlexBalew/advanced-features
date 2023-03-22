import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ITab, Tabs } from '@/shared/ui';
import { enGB } from '@/shared/dictionaries';
import { classNames } from '@/shared/utils';
import { ArticleType } from '../../entities/Article/model';

interface IProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ value, className, onChangeType }: IProps) => {
    const { t } = useTranslation('articles');

    const tabs = useMemo<ITab[]>(
        () => [
            {
                content: t(enGB.ALL),
                value: ArticleType.All,
            },
            {
                content: t(enGB.COMICS),
                value: ArticleType.Comics,
            },
            {
                content: t(enGB.MOVIES),
                value: ArticleType.Movies,
            },
            {
                content: t(enGB.MUSIC),
                value: ArticleType.Music,
            },
            {
                content: t(enGB.NEWS),
                value: ArticleType.News,
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: ITab) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            tabs={tabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
