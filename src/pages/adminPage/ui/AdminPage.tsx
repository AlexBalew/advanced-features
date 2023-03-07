import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { Page } from 'widgets';

const AdminPage = () => {
    const { t } = useTranslation(enGB.ADMIN);

    return (
        <Page>{t(enGB.ADMIN_PAGE)}</Page>
    );
};

export default AdminPage;
