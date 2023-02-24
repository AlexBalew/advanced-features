import { StateSchema } from 'app/providers';

export const getArticleListIsInitialized = (
    state: StateSchema,
) => state.articlesPage?._isInitialized || false;
