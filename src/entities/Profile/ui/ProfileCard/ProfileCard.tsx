import { Countries, CountrySelect } from 'entities/Counrty';
import { Currency, CurrencySelect } from 'entities/Currency';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { RadiusType } from 'shared/types';
import {
    Avatar,
    Column,
    Input,
    Loader,
    Row,
    Text,
} from 'shared/ui';
import { TextAlign, TextTheme } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import { IProfile } from '../../model/types/profile';
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
            <Row
                max
                justify="center"
                className={classNames(classes.root, mods, [className])}
            >
                <Loader />
            </Row>
        );
    }

    if (error) {
        return (
            <Row
                max
                justify="center"
                className={classNames(classes.root, mods, [className])}
            >
                <Text
                    theme={TextTheme.Error}
                    title={t(enGB.COMMON_ERROR_TITLE)}
                    text={t(enGB.COMMON_ERROR_DESCR)}
                    align={TextAlign.Center}
                />
            </Row>
        );
    }

    return (
        <Column gap="8" max className={classNames(classes.root, mods, [className])}>
            {data?.avatar
                && (
                    <Row justify="center" max>
                        <Avatar
                            src={data?.avatar}
                            alt={t(enGB.AVATAR)}
                            radius={RadiusType.Circle}
                        />
                    </Row>
                )}
            <Input
                value={data?.firstname}
                placeholder={t(enGB.YOUR_NAME)}
                className={classes.input}
                readOnly={readOnly}
                data-testid="ProfileCard.FirstName"
                onChange={onChangeFirstName}
            />
            <Input
                value={data?.lastname}
                placeholder={t(enGB.YOUR_LAST_NAME)}
                className={classes.input}
                readOnly={readOnly}
                data-testid="ProfileCard.LastName"
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
        </Column>
    );
});
