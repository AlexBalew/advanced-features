import { StateSchema } from 'app/providers/store-provider';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { getProfileFormData } from '../getProfileFormData';

describe('getProfileFormData test', () => {
    test('getProfileFormData return correct data', () => {
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
            },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual(state.profile?.form);
    });

    test('getProfileFormData return undefined if there is no form data in state', () => {
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
        expect(getProfileFormData(state as StateSchema)).toBeUndefined();
    });
});
