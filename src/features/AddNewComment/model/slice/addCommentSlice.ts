import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: addCommentFormSchema = {
    text: '',
    error: undefined,
};

export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentActions, reducer: addCommentReducer } = addCommentSlice;
