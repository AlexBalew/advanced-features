import { StateSchema } from 'app/providers';

export const getArticleListError = (state: StateSchema) => state.articlesPage?.error;
