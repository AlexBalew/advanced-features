import { createAsyncThunk } from '@reduxjs/toolkit';
import { IComment } from '@/entities/Comment';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { ThunkConfig } from '@/app/providers/store-provider';

export const fetchCommentsByArticleId = createAsyncThunk<
IComment[], string | undefined, ThunkConfig<string>>(
    'article/fetchCommentsByArticleId',
    async (artcileId, { extra, rejectWithValue }) => {
        if (!artcileId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<IComment[]>('comments', {
                params: {
                    artcileId,
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
