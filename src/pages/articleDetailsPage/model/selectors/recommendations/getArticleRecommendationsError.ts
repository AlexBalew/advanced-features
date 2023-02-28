import { StateSchema } from 'app/providers';

export const getArticleRecommendationsError = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.error;
