import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => {

    const { t } = useTranslation()

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.Secondary} to={'/'} className={classes.mainLink}>{t(enGB.MAIN_INFO)}</AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>{t(enGB.ABOUT)}</AppLink>
            </div>
        </div>
    )
}