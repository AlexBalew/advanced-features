export type Mode = Record<string, boolean | string | undefined>;

export const classNames = (
    cls: string,
    mode: Mode = {},
    optionalClss: Array<string | undefined> = [],
): string =>
    [
        cls,
        ...optionalClss.filter(Boolean),
        ...Object.entries(mode)
            .filter(([_, value]) => Boolean(value))
            .map(([classname]) => classname),
    ].join(' ');
