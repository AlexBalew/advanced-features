import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t(enGB.PROFILE_PAGE)}
        </div>
    );
};

export default ProfilePage;
