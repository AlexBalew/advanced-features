import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from '../types';

const initialState: IAddCommentFormSchema = {
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
