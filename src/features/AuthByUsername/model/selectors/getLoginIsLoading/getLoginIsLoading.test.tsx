import { StateSchema } from '@/app/providers/store-provider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading test', () => {
    test('getLoginIsLoading should return true if isLoading flag in state has true value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('getLoginIsLoading should return false if isLoading flag in state has false value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });

    test('getLoginIsLoading should return false if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
