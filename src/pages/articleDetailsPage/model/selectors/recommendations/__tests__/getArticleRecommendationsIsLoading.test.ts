import { StateSchema } from 'app/providers/store-provider';
import { getArticleRecommendationsIsLoading } from '../getArticleRecommendationsIsLoading';

describe('getArticleRecommendationsIsLoading test', () => {
    test('getArticleRecommendationsIsLoading return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleRecommendationsIsLoading(state as StateSchema))
            .toEqual(state.articleDetailsPage?.recommendations?.isLoading);
    });

    test('getArticleRecommendationsIsLoading return false if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(false);
    });
});
