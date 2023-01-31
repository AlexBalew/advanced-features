import { BugButton } from 'app/providers';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t(enGB.MAIN_PAGE)}
        </div>
    );
};

export default MainPage;
