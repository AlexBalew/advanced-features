import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal = ({ children, container = document.body }: IProps) =>
    createPortal(children, container);
