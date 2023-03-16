import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { ArticleType, IArticle } from '@/entities/Article';
import { fetchArticles } from '../fetchArticles';
import { getArticleListLimit } from '../../selectors';

jest.mock('axios', () => ({
    get: jest.fn(),
    create: jest.fn(() => ({
        interceptors: {
            request: { use: jest.fn() },
        },
    })),
}));

jest.mock('../../selectors');

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn();

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
        (axios.get as jest.Mock).mockReturnValue(Promise.resolve({
            data: mockData,
        }));
        const action = fetchArticles({});
        const result = await action(dispatch, getState, {
            api: axios,
        });
        expect(axios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test(
        'fetchArticles should work correctly when there error code was returned by server',
        async () => {
            (axios.get as jest.Mock).mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = fetchArticles({});
            const result = await action(dispatch, getState, {
                api: axios,
            });
            expect(axios.get).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(result.payload).toBe('error');
        },
    );
});
