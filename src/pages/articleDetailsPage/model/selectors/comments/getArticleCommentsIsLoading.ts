import { StateSchema } from 'app/providers';

export const getArticleCommentsIsLoading = (
    state: StateSchema,
) => state.articleDetailsComments?.isLoading || false;
