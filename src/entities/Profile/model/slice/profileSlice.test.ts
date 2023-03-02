import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { ValidationErrors } from '../../model/types/profile';
import { fetchProfileData, updateProfileData } from '../services';
import { IProfileSchema, IProfile } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const mockState: IProfileSchema = {
    form: {
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
    readonly: false,
};

describe('profileSlice test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('setReadOnly action test', () => {
        expect(profileReducer(
            mockState,
            profileActions.setReadOnly(true),
        )).toEqual({ ...mockState, readonly: true });
    });

    test('updateProfile action test', () => {
        expect(profileReducer(
            mockState,
            profileActions.updateProfile({ ...mockState.form, lastname: 'Dillinger' }),
        )).toEqual({ ...mockState, form: { ...mockState.form, lastname: 'Dillinger' } });
    });

    test('cancelEdit action test', () => {
        const mockEditData = { ...mockState, data: { username: 'Doe', age: 23 } };
        expect(profileReducer(
            mockEditData,
            profileActions.cancelEdit(),
        )).toEqual({
            ...mockEditData,
            form: mockEditData.data,
            readonly: true,
            validationError: undefined,
        });
    });

    test('updateProfileData pending test', () => {
        expect(profileReducer(
            mockState,
            updateProfileData.pending,
        )).toEqual({
            ...mockState,
            isLoading: true,
            validationError: undefined,
        });
    });

    test('updateProfileData fulfilled test', () => {
        expect(profileReducer(
            mockState,
            updateProfileData.fulfilled(mockState.form as IProfile, ''),
        )).toEqual({
            ...mockState,
            data: mockState.form,
            isLoading: false,
            readonly: true,
            validationError: undefined,
        });
    });

    test('updateProfileData rejected test', () => {
        expect(profileReducer(
            mockState,
            updateProfileData.rejected(null, '', undefined, [ValidationErrors.Incorrect_City]),
        )).toEqual({
            ...mockState,
            isLoading: false,
            validationError: [ValidationErrors.Incorrect_City],
        });
    });

    test('fetchProfileData pending test', () => {
        expect(profileReducer(
            mockState,
            fetchProfileData.pending,
        )).toEqual({
            ...mockState,
            isLoading: true,
            error: undefined,
        });
    });

    test('fetchProfileData fulfilled test', () => {
        expect(profileReducer(
            mockState,
            fetchProfileData.fulfilled(mockState.form as IProfile, '', ''),
        )).toEqual({
            ...mockState,
            data: mockState.form,
            isLoading: false,
        });
    });

    test('fetchProfileData rejected test', () => {
        expect(profileReducer(
            mockState,
            fetchProfileData.rejected(null, '', '', 'error'),
        )).toEqual({
            ...mockState,
            isLoading: false,
            error: 'error',
        });
    });
});
