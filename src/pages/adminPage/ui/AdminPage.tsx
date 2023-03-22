import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { Page } from '@/widgets/page';

const AdminPage = () => {
    const { t } = useTranslation(enGB.ADMIN);

    return <Page data-testid="AdminPage">{t(enGB.ADMIN_PAGE)}</Page>;
};

export default AdminPage;
