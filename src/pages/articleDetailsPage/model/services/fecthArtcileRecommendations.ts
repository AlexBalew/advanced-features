import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { IArticle } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
IArticle[], void, ThunkConfig<string>>(
    'article/fetchArticleRecommendations',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _limit: 4,
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
