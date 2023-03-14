/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { AppButtonTheme, Button } from '@/shared/ui';
import classes from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classes.root}>
            <div className={classes.notFound}>
                <div className={classes.notFoundText}>
                    <h1>{t(enGB.OOPS)!}</h1>
                    <h2>404 - {t(enGB.THE_PAGE_CAN_NOT_BE_FOUND)}</h2>
                </div>
                <Button
                    type="button"
                    theme={AppButtonTheme.Pure}
                    onClick={onReload}
                >
                    {t(enGB.RELOAD)}
                </Button>
            </div>
        </div>
    );
};
