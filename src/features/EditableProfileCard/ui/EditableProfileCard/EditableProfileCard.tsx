import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Column, Text, TextTheme } from 'shared/ui';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/utils';
import { enGB } from 'shared/dictionaries';
import { useSelector } from 'react-redux';
import { Countries } from 'entities/Counrty';
import { Currency } from 'entities/Currency';
import { ValidationErrors, ProfileCard } from 'entities/Profile';
import {
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidationErrors,
} from '../../model/selectors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfilePageHeader } from './EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProps {
    className?: string;
    id?: string;
}

export const EditableProfileCard = memo((props: IProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

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

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicComponentLoader reducers={reducers}>
            <Column
                gap="8"
                max
                className={classNames('', {}, [className])}
            >
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
            </Column>
        </DynamicComponentLoader>
    );
});
