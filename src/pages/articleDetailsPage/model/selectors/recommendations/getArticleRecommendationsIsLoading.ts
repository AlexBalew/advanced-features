import { StateSchema } from 'app/providers/store-provider';

export const getArticleRecommendationsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.isLoading || false;
