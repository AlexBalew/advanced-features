import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn();
const mockNavigate = jest.fn();

const mockData = {
    username: 'Doe',
    age: 23,
    avatar: '',
    city: 'LA',
    country: Countries.USA,
    currency: Currency.USD,
    firstname: 'John',
    lastname: 'D',
};

describe('fetchProfileData test', () => {
    test('fetchProfileData should work correctly id data from server was returned', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: mockData,
        }));
        const action = fetchProfileData();
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: mockNavigate,
        });
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test(
        'fetchProfileData should work correctly when there error code was returned by server',
        async () => {
            mockedAxios.get.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = fetchProfileData();
            const result = await action(dispatch, getState, {
                api: mockedAxios,
                navigate: mockNavigate,
            });
            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(result.payload).toBe('error');
        },
    );
});
