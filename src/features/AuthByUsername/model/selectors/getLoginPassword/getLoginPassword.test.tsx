import { StateSchema } from 'app/providers';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword test', () => {
    test('getLoginPassword should return password if there is any password in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '4848',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(state.loginForm?.password);
    });

    test('getLoginPassword should return empty string if there is no password in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
