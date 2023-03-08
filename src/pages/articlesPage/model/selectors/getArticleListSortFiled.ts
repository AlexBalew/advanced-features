import { ArticleSortField } from 'entities/Article';
import { StateSchema } from 'app/providers/store-provider';

export const getArticleListSortField = (
    state: StateSchema,
) => state.articlesPage?.sortField || ArticleSortField.Created_At;
