import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from '../services';
import { LoginSchema } from '../types';

const initialState: LoginSchema = {
    isLoading: false,
    password: '',
    userName: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
            state.error = undefined;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUserName.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
