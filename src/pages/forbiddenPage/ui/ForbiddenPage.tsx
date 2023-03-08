import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { Page } from 'widgets/page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>{t(enGB.ACCESS_IS_FORBIDDEN)}</Page>
    );
};

export default ForbiddenPage;
