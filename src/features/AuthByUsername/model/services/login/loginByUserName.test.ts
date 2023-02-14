import { userActions } from 'entities/User';
import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const dispatch: Dispatch = jest.fn();
const getState: () => StateSchema = jest.fn();
const mockNavigate = jest.fn();

describe('loginByUserName test', () => {
    test('loginByUserName should work correctly id data feom server was returned', async () => {
        const userData = { userName: 'admin', id: '48' };
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userData,
        }));
        const action = loginByUserName({ userName: 'admin', password: '344' });
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: mockNavigate,
        });
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test(
        'loginByUserName should work correctly when there error code was returned by server',
        async () => {
            mockedAxios.post.mockReturnValue(Promise.resolve({
                status: 403,
            }));
            const action = loginByUserName({ userName: 'admin', password: '344' });
            const result = await action(dispatch, getState, {
                api: mockedAxios,
                navigate: mockNavigate,
            });
            expect(mockedAxios.post).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(result.payload).toBe('invalid username or password');
        },
    );
});
