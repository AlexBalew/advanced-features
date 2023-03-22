import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { Page } from '@/widgets/page';

const MainPage = () => {
    const { t } = useTranslation();

    return <Page data-testid="MainPage">{t(enGB.MAIN_PAGE)}</Page>;
};

export default MainPage;
