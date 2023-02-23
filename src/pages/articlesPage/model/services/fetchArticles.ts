import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { IArticle } from 'entities/Article/model/types/article';

export const fetchArticles = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
    'articlePage/fetchArticles',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
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
