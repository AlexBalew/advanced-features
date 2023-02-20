import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { IArticle } from '../../../../model/types/article';
import { fetchArticleById } from '../fetchArtcileById';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn();
const mockNavigate = jest.fn();
const mockId = '1';

const mockData: IArticle = {
    id: '1',
    title: 'title',
};

describe('fetchArticleById test', () => {
    test('fetchArticleById should work correctly id data from server was returned', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: mockData,
        }));
        const action = fetchArticleById(mockId);
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: mockNavigate,
        });
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test(
        'fetchArticleById should work correctly when there error code was returned by server',
        async () => {
            mockedAxios.get.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = fetchArticleById(mockId);
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
