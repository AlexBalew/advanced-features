import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { enGB } from '@/shared/dictionaries';
import { RadiusType } from '@/shared/types';
import { Avatar, Dropdown } from '@/shared/ui';
import { classNames } from '@/shared/utils';
import { getPathAdmin, getPathProfile } from '@/shared/config/routeConfig/RouteConfig';

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
                    href: getPathAdmin(),
                }] : []),
                {
                    content: t(enGB.LOGOUT),
                    onClick: onLogout,
                },
                {
                    content: t(enGB.PROFILE),
                    href: getPathProfile(userAuthData.id),
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
