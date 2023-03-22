import { createAsyncThunk } from '@reduxjs/toolkit';
import { enGB } from '@/shared/dictionaries';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/store-provider';
import { IComment } from '@/entities/Comment';
import { getArticleDetails } from '@/entities/Article';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<IComment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, { extra, dispatch, rejectWithValue, getState }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleDetails(getState());

        if (!userData || !text || !article) {
            return rejectWithValue(enGB.NO_DATA_ERROR);
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            return rejectWithValue(enGB.COMMON_ERROR_TITLE);
        }
    },
);
