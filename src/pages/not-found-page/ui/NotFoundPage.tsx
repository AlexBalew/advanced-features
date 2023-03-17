import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { Page } from '@/widgets/page';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="NotFoundPage" className={classes.root}>
            <div className={classes.error}>{enGB[404]}</div>
            <div>{t(enGB.NOT_FOUND)}</div>
        </Page>
    );
};
