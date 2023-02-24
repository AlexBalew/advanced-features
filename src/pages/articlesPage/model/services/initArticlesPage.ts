import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { getArticleListIsInitialized } from '../selectors';
import { articlesPageActions } from '../slice/articlePageSlice';
import { fetchArticles } from './fetchArticles';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<void>>(
    'articlePage/initArticlesPage',
    async (_, { getState, dispatch }) => {
        const isInitialized = getArticleListIsInitialized(getState());

        if (!isInitialized) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticles({
                page: 1,
            }));
        }
    },
);
