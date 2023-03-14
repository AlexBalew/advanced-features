import { StateSchema } from '@/app/providers/store-provider';

export const getArticleDetails = (state: StateSchema) => state.articleDetails?.data;
