import { StateSchema } from 'app/providers/store-provider';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from '../getProfileIsLoading';

describe('getProfileIsLoading test', () => {
    test('getProfileIsLoading return correct data', () => {
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
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });

    test('getProfileIsLoading return false if there is false in state', () => {
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
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });

    test('getProfileIsLoading return undefined if there is no isLoading in state', () => {
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
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBeUndefined();
    });
});
