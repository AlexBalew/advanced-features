import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from '@/shared/dictionaries';
import { AppSelect, IAppSelectOption } from '@/shared/ui';
import { Currency } from '../../model/types/currency';

interface IProps {
    className?: string;
    pickedOption?: Currency;
    onChange?: (pickedOption: Currency) => void;
    readOnly?: boolean;
}

const currencyOptions: IAppSelectOption<Currency>[] = [
    { label: Currency.EUR, value: Currency.EUR },
    { label: Currency.USD, value: Currency.USD },
    { label: Currency.CAD, value: Currency.CAD, disabled: true },
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
        <AppSelect
            direction="top right"
            readOnly={readOnly}
            selectLabel={t<string>(enGB.CURRENCY)}
            pickedLabel={pickedOption}
            options={currencyOptions}
            onChange={onChangeHandler}
        />
    );
});
