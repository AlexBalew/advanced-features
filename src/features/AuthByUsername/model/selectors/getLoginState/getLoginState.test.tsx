import { StateSchema } from 'app/providers/store-provider';
import { getLoginState } from './getLoginState';

describe('getLoginState test', () => {
    test('getLoginState should return error if there is any error in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
                password: '4848',
                userName: 'userX',
                error: '',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
    });

    test('getLoginState should be undefined if there is no error in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toBeUndefined();
    });
});
