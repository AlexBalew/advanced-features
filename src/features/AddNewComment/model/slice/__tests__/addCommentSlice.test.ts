import { addCommentFormSchema } from '../../types';
import { addCommentActions, addCommentReducer } from '../addCommentSlice';

const mockState: addCommentFormSchema = {
    text: 'text',
    error: undefined,
};

const mockText = 'newText';

describe('addCommentSlice test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('setText action test', () => {
        expect(addCommentReducer(mockState, addCommentActions.setText(mockText))).toEqual({
            ...mockState,
            text: mockText,
        });
    });
});
