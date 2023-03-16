import { ArticleSortField } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListSortField = (
    state: StateSchema,
) => state.articlesPage?.sortField || ArticleSortField.Created_At;
