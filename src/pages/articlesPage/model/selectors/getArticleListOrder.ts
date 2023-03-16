// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getArticleListOrder = (
    state: StateSchema,
) => state.articlesPage?.order || 'asc';
