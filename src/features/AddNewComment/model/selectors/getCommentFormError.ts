import { StateSchema } from 'app/providers';

export const getCommentFormError = (state: StateSchema) => state.addComment?.error;
