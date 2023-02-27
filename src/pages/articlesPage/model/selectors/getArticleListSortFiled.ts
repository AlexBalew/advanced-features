import { ArticleSortField } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers';

export const getArticleListSortField = (
    state: StateSchema,
) => state.articlesPage?.sortField || ArticleSortField.Created_At;
