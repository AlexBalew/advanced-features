import { memo } from 'react';
import { AppLinkTheme } from 'shared/ui/types';
import { AppLink, Icon } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ISidebarItem } from '../../model/config';

import classes from './SidebarItem.module.scss';

interface IProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: IProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.Secondary}
            to={item.path}
            className={classes.linkItem}
        >
            <Icon name={item.IconNname} className={classes.icon} />
            {!collapsed && (
                <span className={classes.link}>
                    {t(item.linkTitle)}
                </span>
            )}
        </AppLink>
    );
});
