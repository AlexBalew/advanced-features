import { ArticleListView } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListView = (
    state: StateSchema,
) => state.articlesPage?.view || ArticleListView.List;
