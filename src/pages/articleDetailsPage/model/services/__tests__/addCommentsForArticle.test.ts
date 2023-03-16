import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { ConfigState } from '@reduxjs/toolkit/dist/query/core/apiState';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getUserAuthData, IUser } from '@/entities/User';
import { getArticleDetails, IArticle } from '@/entities/Article';
import { enGB } from '@/shared/dictionaries';
import { addCommentForArticle } from '../addCommentForArticle';

jest.mock('axios', () => ({
    post: jest.fn(),
    create: jest.fn(() => ({
        interceptors: {
            request: { use: jest.fn() },
        },
    })),
}));
jest.mock('../../selectors');
jest.mock('entities/User');
jest.mock('entities/Article/model');

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
    user: {},
    addComment: {
        text: 'text',
    },
};

const mockText = 'new text';

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn(() => mockState);

describe('addCommentForArticle test', () => {
    test('addCommentForArticle should work correctly', async () => {
        (getUserAuthData as jest.Mock).mockReturnValue({} as IUser);
        (getArticleDetails as jest.Mock).mockReturnValue({} as IArticle);
        (axios.post as jest.Mock).mockReturnValue(Promise.resolve({
            data: mockState.addComment?.text,
        }));
        const action = addCommentForArticle(mockText);
        const result = await action(dispatch, getState, {
            api: axios,
        });
        expect(axios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockState.addComment?.text);
    });

    test(
        'addCommentForArticle should work correctly when there error code was returned by server',
        async () => {
            (axios.post as jest.Mock).mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = addCommentForArticle(mockText);
            const result = await action(dispatch, getState, {
                api: axios,
            });
            expect(axios.post).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(result.payload).toEqual(enGB.COMMON_ERROR_TITLE);
        },
    );
});
