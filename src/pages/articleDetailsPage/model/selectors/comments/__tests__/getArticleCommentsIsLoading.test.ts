import { StateSchema } from 'app/providers';
import { getArticleCommentsIsLoading } from '../getArticleCommentsIsLoading';

describe('getArticleCommentsIsLoading test', () => {
    test('getArticleCommentsIsLoading return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema))
            .toEqual(state.articleDetailsComments?.isLoading);
    });

    test('getArticleCommentsIsLoading return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(false);
    });
});
