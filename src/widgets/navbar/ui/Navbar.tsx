import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { Button, Modal } from 'shared/ui';
import { AppButtonTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpened((prev) => !prev);
    }, []);

    return (
        <div className={classNames(classes.root, {}, [className])}>
            <Button
                className={classes.links}
                theme={AppButtonTheme.Background_inverted}
                onClick={onToggleModal}
            >
                {t(enGB.LOGIN)}
            </Button>
            <Modal
                isOpened={isAuthModalOpened}
                onClose={onToggleModal}
            // eslint-disable-next-line i18next/no-literal-string
            >
                Sed pharetra pulvinar viverra. Morbi ex sapien, venenatis ut euismod ac,
                interdum eu lacus. Nam non ex velit. Nullam nisi sapien,
                egestas nec pharetra a, bibendum at ipsum. Vivamus in tempus diam,
                at tristique tortor. Duis nec leo eu mauris bibendum varius ut eget massa.
                Integer accumsan iaculis felis, vitae porttitor nisi placerat a.
            </Modal>
        </div>
    );
};
