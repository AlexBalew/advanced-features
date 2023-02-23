import { StateSchema } from 'app/providers';

export const getArticleListLimit = (
    state: StateSchema,
) => state.articlesPage?.limit || 9;
