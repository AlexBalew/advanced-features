import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LS_KEY } from 'shared/constants';

interface IProps {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, IProps, { rejectValue: string }>(
    'login/loginByUserName',
    async ({ userName, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                userName, password,
            });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('invalid username or password');
        }
    },
);
