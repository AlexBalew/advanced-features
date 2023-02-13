import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/constants';
import { ThunkConfig } from 'app/providers';

interface IProps {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, IProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async ({ userName, password }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', {
                userName, password,
            });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue('invalid username or password');
        }
    },
);
