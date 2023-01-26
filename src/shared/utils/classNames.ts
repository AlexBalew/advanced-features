type Mode = Record<string, boolean | string>

export const classNames = (cls: string, mode: Mode = {}, optionalClss: string[] = []): string => [
    cls,
    ...optionalClss.filter(Boolean),
    ...Object.entries(mode)
        .filter(([_, value]) => Boolean(value))
        .map(([classname]) => classname),
].join(' ');
