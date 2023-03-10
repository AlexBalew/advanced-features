import { DropdownDirection } from '../../types';
import classes from './popup.module.scss';

export const mapDirectionToClass: Record<DropdownDirection, string> = {
    'bottom left': classes.bottomLeft,
    'bottom right': classes.bottomRight,
    'top left': classes.topLeft,
    'top right': classes.topRight,
};
