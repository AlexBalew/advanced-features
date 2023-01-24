type Mode = Record<string, boolean | string>

export const classNames = (cls: string, mode: Mode = {}, optionalClss: string[] = []): string => {
    return [
        cls,
        ...Object.entries(mode)
            .filter(([_, value]) => Boolean(value))
            .map(([classname]) => classname),
        ...optionalClss.filter(Boolean)
    ].join(' ')
}