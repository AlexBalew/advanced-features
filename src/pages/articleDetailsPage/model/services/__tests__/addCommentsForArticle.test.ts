import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserAuthData, IUser } from 'entities/User';
import { getArticleDetails } from 'entities/Article/model';
import { IArticle } from 'entities/Article/model/types/article';
import { enGB } from 'shared/dictionaries';
import { addCommentForArticle } from '../addCommentForArticle';

jest.mock('axios');
jest.mock('../../selectors');
jest.mock('entities/User');
jest.mock('entities/Article/model');

const mockedAxios = jest.mocked(axios, true);

const mockState: StateSchema = {
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
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: mockState.addComment?.text,
        }));
        const action = addCommentForArticle(mockText);
        const result = await action(dispatch, getState, {
            api: mockedAxios,
        });
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockState.addComment?.text);
    });

    test(
        'addCommentForArticle should work correctly when there error code was returned by server',
        async () => {
            mockedAxios.post.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = addCommentForArticle(mockText);
            const result = await action(dispatch, getState, {
                api: mockedAxios,
            });
            expect(mockedAxios.post).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(result.payload).toEqual(enGB.COMMON_ERROR_TITLE);
        },
    );
});
