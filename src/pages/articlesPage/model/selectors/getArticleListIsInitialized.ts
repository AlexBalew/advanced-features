// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListIsInitialized = (
    state: StateSchema,
) => state.articlesPage?._isInitialized || false;
