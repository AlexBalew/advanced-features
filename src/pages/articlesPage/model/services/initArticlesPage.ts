import { ArticleSortField, ArticleType } from 'entities/Article/model';
import { SortType } from 'shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { getArticleListIsInitialized } from '../selectors';
import { articlesPageActions } from '../slice/articlePageSlice';
import { fetchArticles } from './fetchArticles';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<void>>(
    'articlePage/initArticlesPage',
    async (searchParams, { getState, dispatch }) => {
        const isInitialized = getArticleListIsInitialized(getState());

        if (!isInitialized) {
            const orderFromUrl = searchParams.get('order') as SortType;
            const searchValueFromUrl = searchParams.get('searchValue');
            const sortFieldFromUrl = searchParams.get('sortField') as ArticleSortField;
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

            if (searchValueFromUrl) {
                dispatch(articlesPageActions.setSearchValue(searchValueFromUrl));
            }

            if (sortFieldFromUrl) {
                dispatch(articlesPageActions.setSortField(sortFieldFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageActions.setArticleType(typeFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticles({}));
        }
    },
);
