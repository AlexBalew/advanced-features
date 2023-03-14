import { StateSchema } from '@/app/providers/store-provider';
import { getArticleCommentsIsLoading } from '../getArticleCommentsIsLoading';

describe('getArticleCommentsIsLoading test', () => {
    test('getArticleCommentsIsLoading return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema))
            .toEqual(state.articleDetailsPage?.comments?.isLoading);
    });

    test('getArticleCommentsIsLoading return false if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(false);
    });
});
