import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import { Currency } from '../../model/types/currency';

interface IProps {
    className?: string;
    pickedOption?: Currency;
    onChange?: (pickedOption: Currency) => void;
    readOnly?: boolean;
}

const currencyOptions: SelectOption[] = [
    { label: Currency.EUR, value: Currency.EUR },
    { label: Currency.USD, value: Currency.USD },
];

export const CurrencySelect = memo(({
    className,
    pickedOption,
    readOnly,
    onChange,
}: IProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((pickedOption: string) => {
        onChange?.(pickedOption as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t(enGB.CURRENCY)}
            options={currencyOptions}
            pickedOption={pickedOption}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
