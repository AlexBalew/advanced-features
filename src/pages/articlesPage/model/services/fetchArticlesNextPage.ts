import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import {
    getArticleListHasMore,
    getArticleListIsLoading,
    getArticleListPageNum,
} from '../selectors';
import { articlesPageActions } from '../slice/articlePageSlice';
import { fetchArticles } from './fetchArticles';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticleListHasMore(getState());
        const page = getArticleListPageNum(getState());
        const isLoading = getArticleListIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({}));
        }
    },
);
