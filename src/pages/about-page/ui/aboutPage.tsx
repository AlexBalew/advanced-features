import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';

const AboutPage = () => {
    const { t } = useTranslation(enGB.ABOUT);

    return (
        <div>{t(enGB.ABOUT)}</div>
    );
};

export default AboutPage;
