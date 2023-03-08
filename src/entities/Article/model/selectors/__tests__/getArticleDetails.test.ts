import { StateSchema } from 'app/providers/store-provider';
import { getArticleDetails } from '../getArticleDetails';

describe('getArticleDetails test', () => {
    test('getArticleDetails return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    id: '1',
                },
            },
        };
        expect(getArticleDetails(state as StateSchema)).toEqual(state.articleDetails?.data);
    });

    test('getArticleDetails return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetails(state as StateSchema)).toBeUndefined();
    });
});
