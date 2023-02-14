import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import { classNames } from 'shared/utils';
import { Mode } from 'shared/utils/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface IProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo(({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    ...otherProps
}: IProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mode = {
        [classes.readOnly]: readOnly,
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(classes.root, mods, [className])}>
            {placeholder && (
                <div className={classes.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                ref={ref}
                className={classes.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});
