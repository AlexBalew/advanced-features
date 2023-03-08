import { StateSchema } from 'app/providers/store-provider';
import { getArticleDetailsError } from '../getArticleDetailsError';

describe('getArticleDetailsError test', () => {
    test('getArticleDetailsError return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    id: '1',
                },
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(state.articleDetails?.error);
    });

    test('getArticleDetailsError return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toBeUndefined();
    });
});
