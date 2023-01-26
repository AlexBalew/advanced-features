import { FC } from 'react';
import { classNames } from 'shared/utils';
import { AppButtonTheme } from 'shared/ui/types';
import { Button } from 'shared/ui';
import { enGB } from 'shared/dictionaries';
import { useTranslation } from 'react-i18next';
import classes from './LangSwitcher.module.scss';

interface IProps {
    className?: string;
}

export const LangSwitcher: FC<IProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
    };

    return (
        <Button
            className={classNames(classes.root, {}, [className])}
            theme={AppButtonTheme.Pure}
            onClick={switchLanguage}
        >
            {t(enGB.LANGUAGE)}
        </Button>
    );
};
