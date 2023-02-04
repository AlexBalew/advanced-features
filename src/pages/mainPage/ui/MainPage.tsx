import { BugButton } from 'app/providers';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import classes from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t(enGB.MAIN_PAGE)}
            <div className={classes.bugButton}>
                <BugButton />
            </div>
        </div>
    );
};

export default MainPage;
