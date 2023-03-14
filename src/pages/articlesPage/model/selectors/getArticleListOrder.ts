import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListOrder = (
    state: StateSchema,
) => state.articlesPage?.order || 'asc';
