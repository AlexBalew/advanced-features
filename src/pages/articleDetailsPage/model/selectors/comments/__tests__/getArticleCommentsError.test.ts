import { StateSchema } from 'app/providers/store-provider';
import { getArticleCommentsError } from '../getArticleCommentsError';

describe('getArticleCommentsError test', () => {
    test('getArticleCommentsError return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema))
            .toEqual(state.articleDetailsPage?.comments?.error);
    });

    test('getArticleCommentsError return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toBeUndefined();
    });
});
