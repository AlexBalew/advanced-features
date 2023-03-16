// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
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

    test('getCommentFormText should return empty string if there is no text in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormText(state as StateSchema)).toBe('');
    });
});
