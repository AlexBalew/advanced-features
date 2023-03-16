import { ArticleType } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleType = (
    state: StateSchema,
) => state.articlesPage?.type || ArticleType.All;
