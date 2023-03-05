import { Fragment, useState } from 'react';
import { classNames } from 'shared/utils';
import { Listbox } from '@headlessui/react';
import { Mode } from 'shared/utils/classNames';
import { Button } from '../button';
import classes from './AppSelect.module.scss';

type DropDownDirection = 'top' | 'bottom';

export interface IAppSelectOption<T extends string> {
    label: string;
    value: T;
    disabled?: boolean;
}

interface IProps<T extends string> {
    selectLabel?: string;
    className?: string;
    options: IAppSelectOption<T>[];
    pickedLabel?: string;
    defaultLabel?: string;
    readOnly?: boolean;
    onChange: (pickedLabel: T) => void;
    direction: DropDownDirection;
}

const mapDirectionToClass: Record<DropDownDirection, string> = {
    bottom: classes.bottomDirection,
    top: classes.topDirection,
};

export const AppSelect = <T extends string>({
    className,
    options,
    selectLabel,
    defaultLabel,
    readOnly,
    direction = 'bottom',
    pickedLabel,
    onChange,
}: IProps<T>) => {
    const optionClasses = [mapDirectionToClass[direction]];

    return (
        <div className={classNames(classes.root, {}, [className])}>
            {selectLabel && <span className={classes.label}>{selectLabel}</span>}
            <Listbox disabled={readOnly} value={pickedLabel} onChange={onChange}>
                <Listbox.Button disabled={readOnly} className={classes.btn}>
                    <Button>
                        {pickedLabel ?? defaultLabel}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(classes.options, {}, optionClasses)}>
                    {options.map((option) => (
                        <Listbox.Option
                            key={option.label}
                            value={option.value}
                            as={Fragment}
                            disabled={option.disabled}
                        >
                            {({ active, selected, disabled }) => (
                                <li
                                    className={classNames(
                                        classes.optionItem,
                                        {
                                            [classes.active]: active,
                                            [classes.disabled]: disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && '>'}
                                    {option.value}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

export default AppSelect;
