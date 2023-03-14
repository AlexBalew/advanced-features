import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/utils';
import { Sidebar } from '../Sidebar';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockReturnValue({
        t: jest.fn(),
    }),
    initReactI18next: {
        type: '3rdParty',
        init: jest.fn(),
    },
}));

describe('sidebar tests', () => {
    test('should be rendered correctly', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should have passed class when siderbar was clicked', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('root');
    });
});
