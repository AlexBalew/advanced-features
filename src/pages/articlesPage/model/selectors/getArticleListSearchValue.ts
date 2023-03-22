import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListSearchValue = (state: StateSchema) =>
    state.articlesPage?.searchValue ?? '';
