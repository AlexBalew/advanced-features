import {
    ChangeEvent,
    memo,
    useCallback,
    useMemo,
} from 'react';
import { classNames } from '@/shared/utils';
import { Mode } from '@/shared/utils/classNames';
import { SelectOption } from '../types';
import classes from './Select.module.scss';

interface IProps<T extends string> {
    className?: string;
    label?: string;
    options: SelectOption<T>[];
    pickedOption?: T;
    onChange?: (pickedOption: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>({
    className,
    label,
    options,
    pickedOption,
    readOnly,
    onChange,
}: IProps<T>) => {
    const mods: Mode = {

    };

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    const optionList = useMemo(() => options?.map((option) => (
        <option
            className={classes.option}
            value={option.value}
            key={option.value}
        >
            {option.label}
        </option>
    )), [options]);

    return (
        <div className={classNames(classes.root, mods, [className])}>
            {label && <span className={classes.label}>{label}</span>}
            <select
                disabled={readOnly}
                className={classes.select}
                value={pickedOption}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
