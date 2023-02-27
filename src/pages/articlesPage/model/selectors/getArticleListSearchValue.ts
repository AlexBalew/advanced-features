import { StateSchema } from 'app/providers';

export const getArticleListSearchValue = (
    state: StateSchema,
) => state.articlesPage?.searchValue ?? '';
