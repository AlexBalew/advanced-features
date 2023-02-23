import { AddCommentFormSchema } from '../../types/AddCommentFormSchema';
import { addCommentActions, addCommentReducer } from '../addCommentSlice';

const mockState: AddCommentFormSchema = {
    text: 'text',
    error: undefined,
};

const mockText = 'newText';

describe('addCommentSlice test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('setText action test', () => {
        expect(addCommentReducer(
            mockState,
            addCommentActions.setText(mockText),
        )).toEqual({ ...mockState, text: mockText });
    });
});
