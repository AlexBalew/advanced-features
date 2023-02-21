import { StateSchema } from 'app/providers';

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
