import { StateSchema } from 'app/providers/store-provider';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { getProfileData } from '../getProfileData';

describe('getProfileData test', () => {
    test('getProfileData return correct data', () => {
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
        expect(getProfileData(state as StateSchema)).toEqual(state.profile?.data);
    });

    test('getProfileData return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBeUndefined();
    });
});
