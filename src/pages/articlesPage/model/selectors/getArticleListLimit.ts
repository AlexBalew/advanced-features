import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
