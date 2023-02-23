import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticleType } from 'entities/Article';
import { IArticle } from 'entities/Article/model/types/article';
import { fetchArticles } from '../fetchArticles';
import { getArticleListLimit } from '../../selectors';

jest.mock('axios');
jest.mock('../../selectors');

const mockedAxios = jest.mocked(axios, true);

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn();
const mockNavigate = jest.fn();

const mockData: IArticle[] = [
    {
        id: '1',
        title: 'title',
        type: [ArticleType.Movies],
    },
    {
        id: '12',
        title: 'title2',
        type: [ArticleType.Comics],
    },
];

describe('fetchArticles test', () => {
    test('fetchArticles should work correctly id data from server was returned', async () => {
        (getArticleListLimit as jest.Mock).mockReturnValue(5);
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: mockData,
        }));
        const action = fetchArticles({
            page: 1,
        });
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: mockNavigate,
        });
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test(
        'fetchArticles should work correctly when there error code was returned by server',
        async () => {
            mockedAxios.get.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = fetchArticles({
                page: 1,
            });
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
