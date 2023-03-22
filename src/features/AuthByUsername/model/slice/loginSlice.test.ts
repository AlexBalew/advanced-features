import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice test', () => {
    test('set username action test', () => {
        const state: DeepPartial<ILoginSchema> = { userName: 'userX' };
        expect(
            loginReducer(state as ILoginSchema, loginActions.setUserName(String(state.userName))),
        ).toEqual({ userName: 'userX' });
    });

    test('set password action test', () => {
        const state: DeepPartial<ILoginSchema> = { password: '4848' };
        expect(
            loginReducer(state as ILoginSchema, loginActions.setPassword(String(state.password))),
        ).toEqual({ password: '4848' });
    });
});
