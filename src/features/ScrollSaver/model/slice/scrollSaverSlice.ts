import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IScrollSaverSchema } from '../types/ScrollSaverSchema';

const initialState: IScrollSaverSchema = {
    scroll: {},
};

export const scrollSaverSlice = createSlice({
    name: 'scrollSaver',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: scrollSaverSliceActions, reducer: scrollSaverReducer } = scrollSaverSlice;
