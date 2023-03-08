import { StateSchema } from 'app/providers/store-provider';

export const getArticleListHasMore = (
    state: StateSchema,
) => state.articlesPage?.hasMore;
