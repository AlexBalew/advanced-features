import { StateSchema } from '@/app/providers/store-provider';
import { Countries } from '@/entities/Counrty';
import { Currency } from '@/entities/Currency';
import { ValidationErrors } from '@/entities/Profile';
import { getProfileValidationErrors } from '../getProfileValidationErrors';

describe('getProfileValidationErrors test', () => {
    test('getProfileValidationErrors return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    username: 'Doe',
                    age: 23,
                    avatar: '',
                    country: Countries.USA,
                    currency: Currency.USD,
                },
                error: 'error',
                form: {
                    username: 'Doe',
                    age: 28,
                    avatar: '',
                    country: Countries.USA,
                    currency: Currency.USD,
                },
                isLoading: true,
                readonly: true,
                validationError: [
                    ValidationErrors.Incorrect_City,
                    ValidationErrors.Incorrect_User_Data,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(
            state.profile?.validationError,
        );
    });

    test('getProfileReadOnly return undefined if there is no readOnly param in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toBeUndefined();
    });
});
