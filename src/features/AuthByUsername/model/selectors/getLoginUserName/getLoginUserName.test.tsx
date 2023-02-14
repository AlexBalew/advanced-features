import { StateSchema } from 'app/providers';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName test', () => {
    test('getLoginUserName should return error if there is any userName in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                userName: 'userX',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual(state.loginForm?.userName);
    });

    test('getLoginUserName should return empty string if there is no userName in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginUserName(state as StateSchema)).toBe('');
    });
});
