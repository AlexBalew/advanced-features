import { ArticleType } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers';

export const getArticleType = (
    state: StateSchema,
) => state.articlesPage?.type || ArticleType.All;
