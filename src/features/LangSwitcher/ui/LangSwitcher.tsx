import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/utils';
import { AppButtonTheme, Button } from '@/shared/ui';
import { enGB } from '@/shared/dictionaries';
import classes from './LangSwitcher.module.scss';

interface IProps {
    className?: string;
    shortened?: boolean;
}

export const LangSwitcher = memo(({ className, shortened }: IProps) => {
    const { t, i18n } = useTranslation();

    const switchLanguage = () => {
        /* i18next-extract-disable-next-line */
        i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
    };

    return (
        <Button
            className={classNames(classes.root, {}, [className])}
            theme={AppButtonTheme.Pure}
            onClick={switchLanguage}
        >
            {shortened
                ? t(enGB.LANGUAGE_SHORTENED)
                : t(enGB.LANGUAGE)}
        </Button>
    );
});
