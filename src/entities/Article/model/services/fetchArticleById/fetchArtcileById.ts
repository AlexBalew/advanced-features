import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (artcileId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle>(`articles/${artcileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);