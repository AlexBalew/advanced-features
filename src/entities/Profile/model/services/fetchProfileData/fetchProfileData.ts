import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IProfile>('/profile');
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
