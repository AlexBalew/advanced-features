// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleCommentsError = (
    state: StateSchema,
) => state.articleDetailsPage?.comments?.error;
