import { StateSchema } from 'app/providers';

export const getArticleCommentsError = (
    state: StateSchema,
) => state.articleDetailsPage?.comments?.error;
