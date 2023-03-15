import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { enGB } from '@/shared/dictionaries';
import { getPathArticleCreate } from '@/shared/config';
import {
    AppButtonTheme,
    AppLink,
    AppLinkTheme,
    Button,
    Row,
    Text,
    TextTheme,
} from '@/shared/ui';
import { classNames } from '@/shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = memo(({ className }: IProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);
    const { t } = useTranslation();
    const userAuthData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpened(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpened(true);
    }, []);

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
                    to={getPathArticleCreate()}
                    theme={AppLinkTheme.Secondary}
                >
                    {t(enGB.CREATE_ARTICLE)}
                </AppLink>
                <Row gap="16" className={classes.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </Row>
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
