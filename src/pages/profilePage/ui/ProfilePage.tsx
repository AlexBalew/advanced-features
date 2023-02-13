import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicComponentLoader, ReducersList, useAppDispatch } from 'shared/utils';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicComponentLoader>

    );
};

export default ProfilePage;
