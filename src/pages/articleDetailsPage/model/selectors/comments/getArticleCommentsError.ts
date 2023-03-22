import { StateSchema } from '@/app/providers/store-provider';

export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.error;
