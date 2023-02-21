import { StateSchema } from 'app/providers';
import { getCommentFormText } from '../getCommentFormText';

describe('getCommentFormText test', () => {
    test('getCommentFormText should return text if there is any text in state', () => {
        const state: DeepPartial<StateSchema> = {
            addComment: {
                text: 'text',
            },
        };
        expect(getCommentFormText(state as StateSchema)).toEqual(state.addComment?.text);
    });

    test('getCommentFormText should return undefined if there is no text in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormText(state as StateSchema)).toBeUndefined();
    });
});
