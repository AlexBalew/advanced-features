import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.root}>
            <div className={classes.error}>{enGB[404]}</div>
            <div>{t(enGB.NOT_FOUND)}</div>
        </div>
    );
};

export default NotFoundPage;
