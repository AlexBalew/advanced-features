import { StateSchema } from 'app/providers/store-provider';

export const getCommentFormText = (state: StateSchema) => state.addComment?.text ?? '';
