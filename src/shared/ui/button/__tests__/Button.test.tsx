import { render, screen } from '@testing-library/react';
import { AppButtonTheme } from '../../types';
import { Button } from '../Button';

describe('button tests', () => {
    test('should be rendered correctly', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('should have passed class', () => {
        render(<Button className={AppButtonTheme.Pure}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('pure');
    });
});
