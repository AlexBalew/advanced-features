import { StateSchema } from 'app/providers/store-provider';
import { getCommentFormError } from '../getCommentFormError';

describe('getCommentFormError test', () => {
    test('getCommentFormError should return error if there is any error in state', () => {
        const state: DeepPartial<StateSchema> = {
            addComment: {
                error: 'error',
            },
        };
        expect(getCommentFormError(state as StateSchema)).toEqual(state.addComment?.error);
    });

    test('getCommentFormError should return undefined if there is no error in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormError(state as StateSchema)).toBeUndefined();
    });
});
