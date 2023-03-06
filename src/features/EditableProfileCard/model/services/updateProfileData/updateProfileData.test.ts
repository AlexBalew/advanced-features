import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { ConfigState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { ValidationErrors } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';
import { getProfileFormData } from '../../selectors';

jest.mock('axios', () => ({
    put: jest.fn(),
    create: jest.fn(() => ({
        interceptors: {
            request: { use: jest.fn() },
        },
    })),
}));

jest.mock('../../selectors');

const mockState: StateSchema = {
    scrollSaver: {
        scroll: {},
    },
    rtkApi: {
        config: {} as ConfigState<'rtkApi'>,
        mutations: {},
        provided: {},
        queries: {},
        subscriptions: {},
    },
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
        (axios.put as jest.Mock).mockReturnValue(Promise.resolve({
            data: mockState.profile?.form,
        }));
        const action = updateProfileData();
        const result = await action(dispatch, getState, {
            api: axios,
        });
        expect(axios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockState.profile?.form);
    });

    test(
        'updateProfileData should work correctly when there error code was returned by server',
        async () => {
            (axios.put as jest.Mock).mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = updateProfileData();
            const result = await action(dispatch, getState, {
                api: axios,
            });
            expect(axios.put).toHaveBeenCalled();
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
            api: axios,
        });
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidationErrors.Incorrect_User_Data,
            ValidationErrors.Incorrect_Country,
            ValidationErrors.Incorrect_City,
        ]);
    });
});
