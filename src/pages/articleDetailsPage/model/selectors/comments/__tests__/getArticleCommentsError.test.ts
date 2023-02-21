import { StateSchema } from 'app/providers';
import { getArticleCommentsError } from '../getArticleCommentsError';

describe('getArticleCommentsError test', () => {
    test('getArticleCommentsError return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error',
            },
        };
        expect(getArticleCommentsError(state as StateSchema))
            .toEqual(state.articleDetailsComments?.error);
    });

    test('getArticleCommentsError return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toBeUndefined();
    });
});
