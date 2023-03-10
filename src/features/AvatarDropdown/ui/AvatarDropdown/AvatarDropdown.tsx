import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import { enGB } from 'shared/dictionaries';
import { RadiusType } from 'shared/types';
import { Avatar, Dropdown } from 'shared/ui';
import { classNames } from 'shared/utils';

interface IProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: IProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!userAuthData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom right"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t(enGB.ADMIN_PANEL),
                    href: RoutePath.admin,
                }] : []),
                {
                    content: t(enGB.LOGOUT),
                    onClick: onLogout,
                },
                {
                    content: t(enGB.PROFILE),
                    href: RoutePath.profile + userAuthData.id,
                },
            ]}
            trigger={(
                <Avatar
                    radius={RadiusType.Circle}
                    size={30}
                    alt={enGB.AVATAR}
                    src={userAuthData.avatar}
                />
            )}
        />
    );
});
