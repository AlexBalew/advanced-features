import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleListView, ArticleSortField, ArticleType } from '@/entities/Article';
import { ViewSwitcher } from '@/features/ViewSwither';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { enGB } from '@/shared/dictionaries';
import { SortType } from '@/shared/types';
import { Card, Input } from '@/shared/ui';
import { classNames, useAppDispatch, useDebounce } from '@/shared/utils';
import {
    getArticleListOrder,
    getArticleListSearchValue,
    getArticleListSortField,
    getArticleListView,
    getArticleType,
} from '../../model/selectors';
import { fetchArticles } from '../../model/services';
import { articlesPageActions } from '../../model/slice/articlePageSlice';
import classes from './ArticlesPageFilter.module.scss';

interface Iprops {
    className?: string;
}

export const ArticlesPageFilter = memo(({ className }: Iprops) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticleListView);
    const order = useSelector(getArticleListOrder);
    const sortField = useSelector(getArticleListSortField);
    const searchValue = useSelector(getArticleListSearchValue);
    const type = useSelector(getArticleType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const fetchDebouncedData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleListView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeOrder = useCallback(
        (order: SortType) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchDebouncedData();
        },
        [dispatch, fetchDebouncedData],
    );

    const onChangeSortField = useCallback(
        (sortField: ArticleSortField) => {
            dispatch(articlesPageActions.setSortField(sortField));
            dispatch(articlesPageActions.setPage(1));
            fetchDebouncedData();
        },
        [dispatch, fetchDebouncedData],
    );

    const onChangeSearch = useCallback(
        (newSearchValue: string) => {
            dispatch(articlesPageActions.setSearchValue(newSearchValue));
            dispatch(articlesPageActions.setPage(1));
            fetchDebouncedData();
        },
        [dispatch, fetchDebouncedData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setArticleType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <div className={classes.sortWrapper}>
                <ViewSwitcher view={view} onViewClick={onChangeView} />
                <ArticleSortSelector
                    order={order}
                    sortField={sortField}
                    onChangeSort={onChangeSortField}
                    onChangeOrder={onChangeOrder}
                />
            </div>
            <Card className={classes.search}>
                <Input
                    placeholder={t<string>(enGB.SEARCH)}
                    onChange={onChangeSearch}
                    value={searchValue}
                />
            </Card>
            <ArticleTypeTabs className={classes.tabs} value={type} onChangeType={onChangeType} />
        </div>
    );
});
