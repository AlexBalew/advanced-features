import { classNames } from '../classNames';

const addedClass1 = 'addClass1';
const addedClass2 = 'addClass2';

describe('classNames util tests', () => {
    test('classNames should return correct className', () => {
        expect(classNames('className')).toBe('className');
    });

    test('classNames should return correct className if additional class was provided', () => {
        expect(
            classNames('className', {}, [addedClass1, addedClass2]),
        )
            .toBe(`className ${addedClass1} ${addedClass2}`);
    });

    test('classNames should return correct className if mods was passed', () => {
        expect(classNames('className', { hovered: true, opened: true }, [addedClass1]))
            .toBe(`className ${addedClass1} hovered opened`);
    });

    test('classNames should return correct className if one of passed mods is false', () => {
        expect(classNames('className', { hovered: true, opened: false }, [addedClass1]))
            .toBe(`className ${addedClass1} hovered`);
    });

    test('classNames should return correct className if one of passed mods is undefined', () => {
        expect(classNames('className', { hovered: true, opened: undefined }, [addedClass1]))
            .toBe(`className ${addedClass1} hovered`);
    });
});
