import { StateSchema } from 'app/providers';

export const getArticleListOrder = (
    state: StateSchema,
) => state.articlesPage?.order || 'asc';
