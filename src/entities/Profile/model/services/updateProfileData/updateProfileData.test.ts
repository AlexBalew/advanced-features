import { ValidationErrors } from 'entities/Profile/model/types/profile';
import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { getProfileFormData } from '../../selectors';

jest.mock('axios');
jest.mock('../../selectors');

const mockedAxios = jest.mocked(axios, true);

const mockState: StateSchema = {
    profile: {
        form: {
            id: '1',
            username: 'Doe',
            age: 23,
            avatar: '',
            city: 'LA',
            country: Countries.USA,
            currency: Currency.USD,
            firstname: 'John',
            lastname: 'D',
        },
        isLoading: false,
    },
    user: {},
};

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn(() => mockState);
const mockNavigate = jest.fn();

describe('updateProfileData test', () => {
    test('updateProfileData should work correctly', async () => {
        (getProfileFormData as jest.Mock).mockReturnValue({
            username: 'Doe',
            age: 23,
            avatar: '',
            city: 'LA',
            country: Countries.USA,
            currency: Currency.USD,
            firstname: 'John',
            lastname: 'D',
        });
        mockedAxios.put.mockReturnValue(Promise.resolve({
            data: mockState.profile?.form,
        }));
        const action = updateProfileData();
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: mockNavigate,
        });
        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockState.profile?.form);
    });

    test(
        'updateProfileData should work correctly when there error code was returned by server',
        async () => {
            mockedAxios.put.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = updateProfileData();
            const result = await action(dispatch, getState, {
                api: mockedAxios,
                navigate: mockNavigate,
            });
            expect(mockedAxios.put).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(result.payload).toEqual([ValidationErrors.Server_Error]);
        },
    );

    test('validation error test', async () => {
        const mockEmptyState: StateSchema = {
            ...mockState,
            profile: { ...mockState.profile, form: {}, isLoading: false },
        };

        const getState: () => StateSchema = jest.fn(() => mockEmptyState);
        (getProfileFormData as jest.Mock).mockReturnValue({});
        const action = updateProfileData();
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: mockNavigate,
        });
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidationErrors.Incorrect_User_Data,
            ValidationErrors.Incorrect_Country,
            ValidationErrors.Incorrect_City,
        ]);
    });
});
