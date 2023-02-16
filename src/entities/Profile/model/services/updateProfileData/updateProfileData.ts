import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { getProfileFormData } from '../../selectors/getProfileFormData';
import { IProfile, ValidationErrors } from '../../types/profile';
import { validateProfileData } from '../validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidationErrors[]>>(
    'profile/updateProfileData',
    async (_, {
        extra,
        rejectWithValue,
        getState,
    }) => {
        const formData = getProfileFormData(getState());

        const errors = validateProfileData(formData);

        if (errors?.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue([ValidationErrors.Server_Error]);
        }
    },
);
