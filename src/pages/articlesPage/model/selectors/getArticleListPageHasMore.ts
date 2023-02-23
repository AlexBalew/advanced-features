import { StateSchema } from 'app/providers';

export const getArticleListHasMore = (
    state: StateSchema,
) => state.articlesPage?.hasMore;
