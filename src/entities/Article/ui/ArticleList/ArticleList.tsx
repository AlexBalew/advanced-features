import { memo } from 'react';
import { classNames } from 'shared/utils';
import { ArticleListView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';

interface IProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleListView;
}

const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.Tiles ? 12 : 3)
    .fill(0)
    .map((index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton
            className={classes.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo((
    {
        className,
        articles,
        isLoading,
        view = ArticleListView.List,
    }: IProps,
) => {
    const renderArticle = (
        article: IArticle,
    ) => (
        <ArticleListItem
            view={view}
            key={article.id}
            className={classes.card}
            article={article}
        />
    );

    if (isLoading) {
        return (
            <div className={classNames(classes.root, {}, [className, classes[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    return (
        <div className={classNames(classes.root, {}, [className, classes[view]])}>
            {articles?.length > 0
                ? articles?.map(renderArticle)
                : null}
        </div>
    );
});
