import { Fragment } from 'react';
import { classNames } from 'shared/utils';
import { Listbox } from '@headlessui/react';
import { Button } from '../button';
import { Row } from '../flex';
import { DropdownDirection } from '../types';
import classes from './AppSelect.module.scss';

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
    direction: DropdownDirection;
}

const mapDirectionToClass: Record<DropdownDirection, string> = {
    'bottom left': classes.bottomLeft,
    'bottom right': classes.bottomRight,
    'top left': classes.topLeft,
    'top right': classes.topRight,
};

export const AppSelect = <T extends string>({
    className,
    options,
    selectLabel,
    defaultLabel,
    readOnly,
    direction = 'bottom right',
    pickedLabel,
    onChange,
}: IProps<T>) => {
    const optionClasses = [mapDirectionToClass[direction]];

    return (
        <Row gap="4">
            {selectLabel && <span className={classes.label}>{selectLabel}</span>}
            <Listbox
                as="div"
                className={classNames(classes.root, {}, [className])}
                disabled={readOnly}
                value={pickedLabel}
                onChange={onChange}
            >
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
        </Row>
    );
};

export default AppSelect;
