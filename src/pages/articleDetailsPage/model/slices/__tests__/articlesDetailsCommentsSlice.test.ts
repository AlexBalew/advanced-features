import { enGB } from '@/shared/dictionaries';
import { IComment } from '@/entities/Comment';
import { IArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from '../articlesDetailsCommentsSlice';

const mockState: IArticleDetailsCommentsSchema = {
    entities: {
        1: {
            id: '1',
            text: 'text',
        },
    },
    ids: ['1'],
    isLoading: false,
    error: undefined,
};

describe('articleDetailsCommentsSlice test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetchCommentsByArticleId pending test', () => {
        expect(articleDetailsCommentsReducer(
            mockState,
            fetchCommentsByArticleId.pending,
        )).toEqual({
            ...mockState,
            error: undefined,
            isLoading: true,
        });
    });

    test('fetchCommentsByArticleId fulfilled test', () => {
        expect(articleDetailsCommentsReducer(
            mockState,
            fetchCommentsByArticleId.fulfilled(mockState.entities as unknown as IComment[], '', ''),
        )).toEqual({
            ...mockState,
            entities: mockState.entities,
            ids: mockState.ids,
            isLoading: false,
        });
    });

    test('fetchCommentsByArticleId rejected test', () => {
        expect(articleDetailsCommentsReducer(
            mockState,
            fetchCommentsByArticleId.rejected(null, '2', '', enGB.COMMON_ERROR_TITLE),
        )).toEqual({
            ...mockState,
            isLoading: false,
            error: enGB.COMMON_ERROR_TITLE,
        });
    });
});
