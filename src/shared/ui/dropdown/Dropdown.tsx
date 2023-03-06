import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/utils';
import { AppLink } from '../app-link';
import { DropdownDirection } from '../types';
import classes from './Dropdown.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': classes.bottomLeft,
    'bottom right': classes.bottomRight,
    'top right': classes.topRight,
    'top left': classes.topLeft,
};

export function Dropdown({
    items,
    trigger,
    className,
    direction = 'bottom right',
}: IProps) {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(classes.root, {}, [className])}>
            <Menu.Button className={classes.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(classes.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(classes.item, { [classes.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
