import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

    const onCloseModal = () => {
        setIsAuthModalOpened(false);
    };

    const onOpenModal = () => {
        setIsAuthModalOpened(true);
    };

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <Button
                className={classes.links}
                theme={AppButtonTheme.Background_inverted}
                onClick={onOpenModal}
            >
                {t(enGB.LOGIN)}
            </Button>
            <LoginModal
                isOpened={isAuthModalOpened}
                onClose={onCloseModal}
            />
        </div>
    );
};
