import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { ThunkConfig } from '@/app/providers/store-provider';
import { IProfile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
