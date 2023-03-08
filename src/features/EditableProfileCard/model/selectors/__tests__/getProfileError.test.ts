import { StateSchema } from 'app/providers/store-provider';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { getProfileError } from '../getProfileError';

describe('getProfileError test', () => {
    test('getProfileError return correct data', () => {
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
        expect(getProfileError(state as StateSchema)).toEqual(state.profile?.error);
    });

    test('getProfileError return undefined if there is no error in state', () => {
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
            },
        };
        expect(getProfileError(state as StateSchema)).toBeUndefined();
    });
});
