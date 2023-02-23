import { StateSchema } from 'app/providers';

export const getArticleListIsLoading = (
    state: StateSchema,
) => state.articlesPage?.isLoading || false;
