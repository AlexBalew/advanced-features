import { ArticleListView } from 'entities/Article';
import { StateSchema } from 'app/providers';

export const getArticleListView = (
    state: StateSchema,
) => state.articlesPage?.view || ArticleListView.List;
