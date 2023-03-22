import { ArticleType } from '@/entities/Article';
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleType = (state: StateSchema) => state.articlesPage?.type || ArticleType.All;
