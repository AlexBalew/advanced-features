import { StateSchema } from 'app/providers';
import { getArticleRecommendationsError } from '../getArticleRecommendationsError';

describe('getArticleRecommendationsError test', () => {
    test('getArticleRecommendationsError return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    error: 'error',
                },
            },
        };
        expect(getArticleRecommendationsError(state as StateSchema))
            .toEqual(state.articleDetailsPage?.recommendations?.error);
    });

    test('getArticleRecommendationsError return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleRecommendationsError(state as StateSchema)).toBeUndefined();
    });
});
