import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme, Icon } from '@/shared/ui';
import { getUserAuthData } from '@/entities/User';
import { ISidebarItem } from '../../model/types';
import classes from './SidebarItem.module.scss';

interface IProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: IProps) => {
    const { t } = useTranslation();

    const isAuthorised = useSelector(getUserAuthData);

    if (item.isAuth && !isAuthorised) {
        return null;
    }

    return (
        <AppLink theme={AppLinkTheme.Secondary} to={item.path} className={classes.linkItem}>
            <Icon name={item.IconNname} className={classes.icon} />
            {!collapsed && <span className={classes.link}>{t(item.linkTitle)}</span>}
        </AppLink>
    );
});
