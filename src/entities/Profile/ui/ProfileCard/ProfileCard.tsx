import {
    getProfileData,
    getProfileIsLoading,
    getProfileError,
} from 'entities/Profile/model/selectors';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import {
    Button,
    Input,
    Loader,
    Text,
} from 'shared/ui';
import { AppButtonTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import classes from './ProfileCard.module.scss';

interface IProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: IProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    const mods: Record<string, boolean> = {
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={classNames(classes.root, mods, [className])}>
            <div className={classes.header}>
                <Text title={t(enGB.PROFILE)} />
                <Button
                    className={classes.editBtn}
                    theme={AppButtonTheme.Outline}
                >
                    {t(enGB.EDIT)}
                </Button>
            </div>
            <div className={classes.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t(enGB.YOUR_NAME)}
                    className={classes.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t(enGB.YOUR_LAST_NAME)}
                    className={classes.input}
                />
            </div>
        </div>
    );
});
