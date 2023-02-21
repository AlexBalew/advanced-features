import { StateSchema } from 'app/providers';

export const getCommentFormText = (state: StateSchema) => state.addComment?.text;
