import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice test', () => {
    test('set username action test', () => {
        const state: DeepPartial<LoginSchema> = { userName: 'userX' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName(state.userName),
        )).toEqual({ userName: 'userX' });
    });

    test('set password action test', () => {
        const state: DeepPartial<LoginSchema> = { password: '4848' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword(state.password),
        )).toEqual({ password: '4848' });
    });
});
