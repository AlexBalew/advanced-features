import { ReactNode } from 'react';
import { Popover } from '@headlessui/react';
import { classNames } from '@/shared/utils';
import { DropdownDirection } from '../../../types';
import { mapDirectionToClass } from '../../styles';
import classes from './Popover.module.scss';
import popupClasses from '../../styles/popup.module.scss';

interface IProps {
    className?: string;
    children?: ReactNode;
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export const AppPopover = ({
    className,
    children,
    trigger,
    direction = 'bottom right',
}: IProps) => {
    const menuClasses = [mapDirectionToClass[direction]];

    return (
        <Popover className={classNames(classes.root, {}, [className, popupClasses.root])}>
            <Popover.Button className={popupClasses.trigger}>
                {trigger}
            </Popover.Button>
            <Popover.Panel className={classNames(classes.panel, {}, menuClasses)}>
                {children}
            </Popover.Panel>
        </Popover>
    );
};
