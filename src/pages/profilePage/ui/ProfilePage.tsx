import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { DynamicComponentLoader, ReducersList } from 'shared/utils';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t(enGB.PROFILE_PAGE)}
            </div>
        </DynamicComponentLoader>

    );
};

export default ProfilePage;
