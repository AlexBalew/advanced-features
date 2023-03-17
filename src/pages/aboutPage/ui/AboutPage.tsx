import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { Page } from '@/widgets/page';

const AboutPage = () => {
    const { t } = useTranslation(enGB.ABOUT);

    return (
        <Page data-testid="AboutPage">{t(enGB.ABOUT)}</Page>
    );
};

export default AboutPage;
