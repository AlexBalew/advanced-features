import {
    createElement,
    FunctionComponent,
    memo,
    MouseEventHandler,
} from 'react';

import allIcons from './all-icons';
import { IconName } from './types';

interface IProps {
  id?: string;
  className?: string;
  name: IconName;
  size?: number;
  onClick?: MouseEventHandler<SVGElement>;
  onMouseOver?: MouseEventHandler<SVGElement>;
  onMouseOut?: MouseEventHandler<SVGElement>;
}

const Icon: FunctionComponent<IProps> = ({
    id,
    size = 24,
    name,
    className,
    onClick,
    onMouseOver,
    onMouseOut,
}) => createElement(allIcons[name], {
    id,
    height: size,
    width: size,
    name,
    className,
    onClick,
    onMouseOver,
    onMouseOut,
});

export default memo(Icon);
