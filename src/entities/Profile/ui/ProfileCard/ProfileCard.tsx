import { IProfile } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import {
    Input,
    Loader,
    Text,
} from 'shared/ui';
import { TextAlign, TextTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import classes from './ProfileCard.module.scss';

interface IProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeFirstName: (value?: string) => void;
    onChangeLastName: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCity: (value?: string) => void;
}

export const ProfileCard = memo(({
    className,
    data,
    error,
    isLoading,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
}: IProps) => {
    const { t } = useTranslation('profile');

    const mods: Record<string, boolean> = {
    };

    if (isLoading) {
        return (
            <div className={classNames(classes.root, mods, [className, classes.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(classes.root, mods, [className, classes.error])}>
                <Text
                    theme={TextTheme.Error}
                    title={t(enGB.COMMON_ERROR_TITLE)}
                    text={t(enGB.COMMON_ERROR_DESCR)}
                    align={TextAlign.Center}
                />
            </div>
        );
    }

    return (
        <div className={classNames(classes.root, mods, [className])}>
            <div className={classes.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t(enGB.YOUR_NAME)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t(enGB.YOUR_LAST_NAME)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeLastName}
                />
                <Input
                    type="number"
                    pattern="[0-9]{0,5}"
                    value={data?.age}
                    placeholder={t(enGB.YOUR_AGE)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t(enGB.CITY)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeCity}
                />
            </div>
        </div>
    );
});
