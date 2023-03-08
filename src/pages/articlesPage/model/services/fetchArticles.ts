import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { ArticleType, IArticle } from 'entities/Article';
import { addQueryParams } from 'shared/utils';
import {
    getArticleListLimit,
    getArticleListOrder,
    getArticleListSearchValue,
    getArticleListSortField,
    getArticleListPageNum,
    getArticleType,
} from '../selectors';

interface IProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<IArticle[], IProps, ThunkConfig<string>>(
    'articlePage/fetchArticles',
    async (_, { extra, getState, rejectWithValue }) => {
        const limit = getArticleListLimit(getState());
        const order = getArticleListOrder(getState());
        const sortField = getArticleListSortField(getState());
        const searchValue = getArticleListSearchValue(getState());
        const page = getArticleListPageNum(getState());
        const type = getArticleType(getState());

        try {
            addQueryParams({
                sortField, order, searchValue, type,
            });
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sortField,
                    q: searchValue,
                    type: type === ArticleType.All ? undefined : type,
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
