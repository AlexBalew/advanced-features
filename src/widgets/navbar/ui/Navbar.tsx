import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config';
import { enGB } from 'shared/dictionaries';
import { RadiusType } from 'shared/types';
import {
    AppButtonTheme,
    AppLink,
    AppLinkTheme,
    Avatar,
    Button,
    Text,
    TextTheme,
} from 'shared/ui';
import { Dropdown } from 'shared/ui/dropdown/Dropdown';
import { classNames } from 'shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = memo(({ className }: IProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpened(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpened(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (userAuthData) {
        return (
            <header className={classNames(classes.root, {}, [className])}>
                <Text
                    className={classes.appTitle}
                    title={enGB.ARTICLES_APP}
                    theme={TextTheme.Inverted}
                />
                <AppLink
                    className={classes.createLink}
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.Secondary}
                >
                    {t(enGB.CREATE_ARTICLE)}
                </AppLink>
                <Dropdown
                    direction="bottom right"
                    className={classes.dropdown}
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
            </header>
        );
    }

    return (
        <header className={classNames(classes.root, {}, [className])}>
            <Button
                className={classes.links}
                theme={AppButtonTheme.Background_inverted}
                onClick={onOpenModal}
            >
                {t(enGB.LOGIN)}
            </Button>
            {isAuthModalOpened && (
                <LoginModal
                    isOpened={isAuthModalOpened}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
