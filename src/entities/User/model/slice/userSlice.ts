import { USER_LS_KEY } from 'shared/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {
    _isMounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const userData = localStorage.getItem(USER_LS_KEY);
            if (userData) {
                state.authData = JSON.parse(userData);
            }
            state._isMounted = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LS_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
