import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t(enGB.MAIN_PAGE)}
        </div>
    );
};

export default MainPage;
