// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListIsLoading = (
    state: StateSchema,
) => state.articlesPage?.isLoading || false;
