import { Menu } from '@headlessui/react';
import { Fragment, Key, ReactNode } from 'react';
import { classNames } from '@/shared/utils';
import { AppLink } from '../../../app-link';
import { DropdownDirection } from '../../../types';
import { mapDirectionToClass } from '../../styles';
import classes from './Dropdown.module.scss';
import popupClasses from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface IProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown({
    items,
    trigger,
    className,
    direction = 'bottom right',
}: IProps) {
    const menuClasses = [mapDirectionToClass[direction]];

    return (
        <Menu as="div" className={classNames('', {}, [className, popupClasses.root])}>
            <Menu.Button className={popupClasses.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(classes.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(classes.item, { [popupClasses.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.content as Key}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={item.content as Key}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
