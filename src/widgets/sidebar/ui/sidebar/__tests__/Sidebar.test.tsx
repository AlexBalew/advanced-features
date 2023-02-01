import { fireEvent, screen } from '@testing-library/react';
import { renderWithTransation } from 'shared/utils';
import { Sidebar } from '../Sidebar';

describe('sidebar tests', () => {
    test('should be rendered correctly', () => {
        renderWithTransation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should have passed class when siderbar was clicked', () => {
        renderWithTransation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('root');
    });
});
