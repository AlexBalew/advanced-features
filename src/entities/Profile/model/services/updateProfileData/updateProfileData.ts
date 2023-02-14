import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { getProfileFormData } from '../../selectors/getProfileFormData';
import { IProfile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, {
        dispatch,
        extra,
        rejectWithValue,
        getState,
    }) => {
        const formData = getProfileFormData(getState());

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
