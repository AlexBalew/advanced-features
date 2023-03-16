// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListPageNum = (
    state: StateSchema,
) => state.articlesPage?.page || 1;
