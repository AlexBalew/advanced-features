import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Button } from 'shared/ui';
import { AppButtonTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpened(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpened(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (userAuthData) {
        return (
            <div className={classNames(classes.root, {}, [className])}>
                <Button
                    className={classes.links}
                    theme={AppButtonTheme.Background_inverted}
                    onClick={onLogout}
                >
                    {t(enGB.LOGOUT)}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(classes.root, {}, [className])}>
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
        </div>
    );
};
