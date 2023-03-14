import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { StateSchema } from '@/app/providers/store-provider';
import { IComment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn();
const mockId = '1';

const mockData: IComment[] = [
    {
        id: '1',
        text: 'text1',
    },
    {
        id: '2',
        text: 'text2',
    },
];

describe('fetchCommentsByArticleId test', () => {
    test('fetchCommentsByArticleId should work correctly', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: mockData,
        }));
        const action = fetchCommentsByArticleId(mockId);
        const result = await action(dispatch, getState, {
            api: mockedAxios,
        });
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test(
        'fetchCommentsByArticleId should work correctly if error code was returned by server',
        async () => {
            mockedAxios.get.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = fetchCommentsByArticleId(mockId);
            const result = await action(dispatch, getState, {
                api: mockedAxios,
            });
            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(result.payload).toBe('error');
        },
    );
});
