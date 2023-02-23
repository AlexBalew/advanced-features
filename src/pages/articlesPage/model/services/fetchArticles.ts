import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { IArticle } from 'entities/Article/model/types/article';
import { getArticleListLimit } from '../selectors';

interface IProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<IArticle[], IProps, ThunkConfig<string>>(
    'articlePage/fetchArticles',
    async ({ page = 1 }, { extra, getState, rejectWithValue }) => {
        const limit = getArticleListLimit(getState());
        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
