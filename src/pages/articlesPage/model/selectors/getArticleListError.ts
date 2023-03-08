import { StateSchema } from 'app/providers/store-provider';

export const getArticleListError = (state: StateSchema) => state.articlesPage?.error;
