// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleCommentsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.comments.isLoading || false;
