import { Countries, CountrySelect } from 'entities/Counrty';
import { Currency, CurrencySelect } from 'entities/Currency';
import { IProfile } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import {
    Avatar,
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
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Countries) => void;
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
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
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
                {data?.avatar
                    && (
                        <div className={classes.avatarWrapper}>
                            <Avatar src={data?.avatar} alt={t(enGB.AVATAR)} />
                        </div>
                    )}
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
                <CountrySelect
                    pickedOption={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t(enGB.CITY)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeCity}
                />
                <CurrencySelect
                    pickedOption={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t(enGB.USERNAME)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeUserName}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t(enGB.INSERT_AVATAR_LINK)}
                    className={classes.input}
                    readOnly={readOnly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
});
