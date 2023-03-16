import { StateSchema } from '@/app/providers/store-provider';

export const getCommentFormError = (state: StateSchema) => state.addComment?.error;
