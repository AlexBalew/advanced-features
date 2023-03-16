import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { ThunkConfig } from '@/app/providers/store-provider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (artcileId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle>(`articles/${artcileId}`, {
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
