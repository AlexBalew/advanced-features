import { enGB } from '@/shared/dictionaries';
import { articleDetailsReducer } from '../../../model/slice/artcileDetailsSlice';
import { IArticleDetailsSchema } from '../../types/articleDetailsSchema';
import { fetchArticleById } from '../../services/fetchArticleById';
import { ArticleType } from '../../constants';
import { IArticle } from '../../types/article';

const mockState: IArticleDetailsSchema = {
    data: {
        id: '1',
        title: 'title',
        type: [ArticleType.Movies],
    },
    isLoading: false,
    error: undefined,
};

describe('articleDetailsSlice test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetchArticleById pending test', () => {
        expect(articleDetailsReducer(
            mockState,
            fetchArticleById.pending,
        )).toEqual({
            ...mockState,
            isLoading: true,
            validationError: undefined,
        });
    });

    test('fetchArticleById fulfilled test', () => {
        expect(articleDetailsReducer(
            mockState,
            fetchArticleById.fulfilled(mockState.data as IArticle, '', ''),
        )).toEqual({
            ...mockState,
            data: mockState.data,
            isLoading: false,
        });
    });

    test('fetchArticleById rejected test', () => {
        expect(articleDetailsReducer(
            mockState,
            fetchArticleById.rejected(null, '2', '', enGB.COMMON_ERROR_TITLE),
        )).toEqual({
            ...mockState,
            isLoading: false,
            error: enGB.COMMON_ERROR_TITLE,
        });
    });
});
