import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { DynamicComponentLoader, ReducersList, useAppDispatch } from 'shared/utils';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicComponentLoader>

    );
};

export default ProfilePage;
