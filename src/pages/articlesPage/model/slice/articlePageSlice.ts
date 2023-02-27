import { SortType } from 'shared/types';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import {
    ArticleListView,
    ArticleSortField,
    ArticleType,
    IArticle,
} from 'entities/Article/model/types/article';
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/constants';
import { fetchArticles } from '../services/fetchArticles';
import { ArticlesPageSchema } from '../types/articlePageSchema';

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
        view: ArticleListView.List,
        page: 1,
        hasMore: true,
        _isInitialized: false,
        limit: 9,
        order: 'asc',
        searchValue: '',
        sortField: ArticleSortField.Created_At,
        type: ArticleType.All,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortType>) => {
            state.order = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSortField: (state, action: PayloadAction<ArticleSortField>) => {
            state.sortField = action.payload;
        },
        setArticleType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_VIEW_KEY) as ArticleListView;
            state.view = view;
            state.limit = view === ArticleListView.List ? 4 : 9;
            state._isInitialized = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;

            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit;

            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            } else {
                articlesAdapter.addMany(state, action.payload);
            }
        });
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
