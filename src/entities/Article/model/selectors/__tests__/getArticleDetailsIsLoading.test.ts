import { StateSchema } from '@/app/providers/store-provider';
import { getArticleDetailsIsLoading } from '../getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading test', () => {
    test('getArticleDetailsIsLoading return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    id: '1',
                },
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toEqual(state.articleDetails?.isLoading);
    });

    test('getArticleDetailsIsLoading return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });
});
