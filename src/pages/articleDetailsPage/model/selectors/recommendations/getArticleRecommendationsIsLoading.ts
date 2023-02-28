import { StateSchema } from 'app/providers';

export const getArticleRecommendationsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.isLoading || false;
