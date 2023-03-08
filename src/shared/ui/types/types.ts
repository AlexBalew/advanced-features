export interface SelectOption<T extends string> {
    value: T;
    label: string;
}

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';
