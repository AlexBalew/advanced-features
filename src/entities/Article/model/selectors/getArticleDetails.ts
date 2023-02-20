import { StateSchema } from 'app/providers';

export const getArticleDetails = (state: StateSchema) => state.articleDetails?.data;
