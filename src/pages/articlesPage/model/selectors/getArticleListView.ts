import { ArticleListView } from '@/entities/Article';
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListView = (
    state: StateSchema,
) => state.articlesPage?.view || ArticleListView.List;
