import { StateSchema } from '@/app/providers/store-provider';

export const getArticleRecommendationsError = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.error;
