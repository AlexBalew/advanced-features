import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '@/shared/utils';
import { Button } from '../../../button';
import { Row } from '../../../flex';
import { DropdownDirection } from '../../../types';
import { mapDirectionToClass } from '../../styles';
import classes from './AppSelect.module.scss';
import popupClasses from '../../styles/popup.module.scss';

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
                className={classNames(classes.root, {}, [className, popupClasses.root])}
                disabled={readOnly}
                value={pickedLabel}
                onChange={onChange}
            >
                <Listbox.Button disabled={readOnly} className={popupClasses.trigger}>
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
                                            [popupClasses.active]: active,
                                            [popupClasses.disabled]: disabled,
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
