import { StateSchema } from '@/app/providers/store-provider';
import { Countries } from '@/entities/Counrty';
import { Currency } from '@/entities/Currency';
import { getProfileReadOnly } from '../getProfileReadOnly';

describe('getProfileReadOnly test', () => {
    test('getProfileReadOnly return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    username: 'Doe',
                    age: 23,
                    avatar: '',
                    city: 'LA',
                    country: Countries.USA,
                    currency: Currency.USD,
                    firstname: 'John',
                    lastname: 'D',
                },
                error: 'error',
                form: {
                    username: 'Doe',
                    age: 28,
                    avatar: '',
                    city: 'LA',
                    country: Countries.USA,
                    currency: Currency.USD,
                    firstname: 'John',
                    lastname: 'Dil',
                },
                isLoading: true,
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toBe(true);
    });

    test('getProfileReadOnly return false if there is false in state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    username: 'Doe',
                    age: 23,
                    avatar: '',
                    city: 'LA',
                    country: Countries.USA,
                    currency: Currency.USD,
                    firstname: 'John',
                    lastname: 'D',
                },
                error: 'error',
                form: {
                    username: 'Doe',
                    age: 28,
                    avatar: '',
                    city: 'LA',
                    country: Countries.USA,
                    currency: Currency.USD,
                    firstname: 'John',
                    lastname: 'Dil',
                },
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toBe(false);
    });

    test('getProfileReadOnly return undefined if there is no readOnly param in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toBeUndefined();
    });
});
