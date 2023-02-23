import { ArticleListView } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers';

export const getArticleListView = (
    state: StateSchema,
) => state.articlesPage?.view || ArticleListView.List;
