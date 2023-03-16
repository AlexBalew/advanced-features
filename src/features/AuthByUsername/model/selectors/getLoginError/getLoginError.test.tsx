// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getLoginError } from './getLoginError';

describe('getLoginError test', () => {
    test('getLoginError should return error if there is any error in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual(state.loginForm?.error);
    });

    test('getLoginError should be undefined if there is no error in state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginError(state as StateSchema)).toBeUndefined();
    });
});
