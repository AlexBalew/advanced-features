import { IArticle } from 'entities/Article/model/types/article';
import { ArticleListView } from 'entities/Article';
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/constants';
import { ArticlesPageSchema } from '../../types/articlePageSchema';
import { articlesPageActions, articlesPageReducer } from '../articlePageSlice';
import { fetchArticles } from '../../services/fetchArticles';

const mockState: ArticlesPageSchema = {
    entities: {},
    ids: [],
    isLoading: false,
    view: ArticleListView.List,
    error: undefined,
    hasMore: true,
    page: 1,
};

describe('articlesPageSlice test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('setView action test', () => {
        expect(articlesPageReducer(
            mockState,
            articlesPageActions.setView(ArticleListView.List),
        )).toEqual({ ...mockState, view: ArticleListView.List });
    });

    test('initState action test', () => {
        expect(articlesPageReducer(
            mockState,
            articlesPageActions.initState(),
        )).toEqual({ ...mockState, view: localStorage.getItem(LOCAL_STORAGE_VIEW_KEY), limit: 4 });
    });

    test('fetchArticles pending test', () => {
        expect(articlesPageReducer(
            mockState,
            fetchArticles.pending,
        )).toEqual({
            ...mockState,
            isLoading: true,
            validationError: undefined,
        });
    });

    test('fetchArticles fulfilled test', () => {
        expect(articlesPageReducer(
            mockState,
            fetchArticles.fulfilled(mockState.entities as unknown as IArticle[], '', {}),
        )).toEqual({
            ...mockState,
            isLoading: false,
            hasMore: false,
        });
    });

    test('fetchArticles rejected test', () => {
        expect(articlesPageReducer(
            mockState,
            fetchArticles.rejected(null, '', {}, 'error'),
        )).toEqual({
            ...mockState,
            isLoading: false,
            error: 'error',
        });
    });
});
