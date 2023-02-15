import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/types';
import { classNames } from 'shared/utils';
import { Countries } from '../../model/types/country';

interface IProps {
    className?: string;
    pickedOption?: Countries;
    onChange?: (pickedOption: Countries) => void;
    readOnly?: boolean;
}

const countryOptions: SelectOption[] = [
    { label: Countries.CANADA, value: Countries.CANADA },
    { label: Countries.SPAIN, value: Countries.SPAIN },
    { label: Countries.USA, value: Countries.USA },
];

export const CountrySelect = memo(({
    className,
    pickedOption,
    readOnly,
    onChange,
}: IProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((pickedOption: string) => {
        onChange?.(pickedOption as Countries);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t(enGB.COUNTRY)}
            options={countryOptions}
            pickedOption={pickedOption}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
