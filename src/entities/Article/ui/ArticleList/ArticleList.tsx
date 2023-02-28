import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/utils';
import { Text, TextSize } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { ArticleListView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';

interface IProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleListView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.Tiles ? 12 : 3)
    .fill(0)
    .map(() => (
        <ArticleListItemSkeleton
            className={classes.card}
            key={Math.random()}
            view={view}
        />
    ));

export const ArticleList = memo((
    {
        className,
        articles,
        isLoading,
        target,
        view = ArticleListView.List,
    }: IProps,
) => {
    const { t } = useTranslation();
    const renderArticle = (
        article: IArticle,
    ) => (
        <ArticleListItem
            view={view}
            key={article.id}
            className={classes.card}
            target={target}
            article={article}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(classes.root, {}, [className, classes[view]])}>
                <Text size={TextSize.L} title={t(enGB.NO_ARTICLES)} />
            </div>
        );
    }

    return (
        <div className={classNames(classes.root, {}, [className, classes[view]])}>
            {articles?.length > 0
                ? articles?.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
