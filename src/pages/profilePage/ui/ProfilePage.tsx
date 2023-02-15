import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import {
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidationErrors,
} from 'entities/Profile/model/selectors';
import { ValidationErrors } from 'entities/Profile/model/types/profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Text } from 'shared/ui';
import { TextTheme } from 'shared/ui/types';
import { DynamicComponentLoader, ReducersList, useAppDispatch } from 'shared/utils';
import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const validationErrorDictionary = {
        [ValidationErrors.Server_Error]: t(enGB.SERVER_ERROR),
        [ValidationErrors.Incorrect_Country]: t(enGB.INCORRECT_COUNTRY),
        [ValidationErrors.Incorrect_City]: t(enGB.INCORRECT_CITY),
        [ValidationErrors.No_Data]: t(enGB.NO_DATA_ERROR),
        [ValidationErrors.Incorrect_User_Data]: t(enGB.USER_NAME_ERROR),
    };

    const formData = useSelector(getProfileFormData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUserName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Countries) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validationErrors?.length && validationErrors.map((error) => (
                <Text
                    key={error}
                    theme={TextTheme.Error}
                    text={validationErrorDictionary[error]}
                />
            ))}
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                readOnly={readOnly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUserName={onChangeUserName}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicComponentLoader>

    );
};

export default ProfilePage;
