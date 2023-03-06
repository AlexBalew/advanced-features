import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { enGB } from 'shared/dictionaries';
import { AppSelect, IAppSelectOption } from 'shared/ui';
import { classNames } from 'shared/utils';
import { Countries } from '../../model/types/country';

interface IProps {
    className?: string;
    pickedOption?: Countries;
    onChange?: (pickedOption: Countries) => void;
    readOnly?: boolean;
}

const countryOptions: IAppSelectOption<Countries>[] = [
    { label: Countries.CANADA, value: Countries.CANADA },
    { label: Countries.SPAIN, value: Countries.SPAIN, disabled: true },
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
        <AppSelect
            direction="top right"
            className={classNames('', {}, [className])}
            selectLabel={t(enGB.COUNTRY)}
            options={countryOptions}
            pickedLabel={pickedOption}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
