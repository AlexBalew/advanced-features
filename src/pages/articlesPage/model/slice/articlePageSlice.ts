import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { ArticleListView, IArticle } from 'entities/Article/model/types/article';
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
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_VIEW_KEY) as ArticleListView;
            state.view = view;
            state.limit = view === ArticleListView.List ? 4 : 9;
            state._isInitialized = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
            state.isLoading = false;
            articlesAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length > 0;
        });
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
