import { StateSchema } from 'app/providers';

export const getArticleListPageNum = (
    state: StateSchema,
) => state.articlesPage?.page || 1;
