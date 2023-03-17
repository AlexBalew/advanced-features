import { screen } from '@testing-library/react';
import { getPathAdmin, getPathMain, getPathProfile } from '@/shared/config/routeConfig/RouteConfig';
import { componentRender } from '@/shared/utils';
import AppRouter from '../AppRouter';
import { UserRoles } from '@/entities/User';

describe('app router test', () => {
    test('page should be rendered correctly', async () => {
        componentRender(<AppRouter />, {
            route: getPathMain(),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('not found page should be rendered if passed route is incorrect', async () => {
        componentRender(<AppRouter />, {
            route: '/invalid-route',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test(
        'if user has no rights to load some page, main page should be rendered instead',
        async () => {
            componentRender(<AppRouter />, {
                route: getPathProfile('1'),
            });

            const page = await screen.findByTestId('MainPage');
            expect(page).toBeInTheDocument();
        },
    );

    test(
        'authorized user has should have access to hidden pages',
        async () => {
            componentRender(<AppRouter />, {
                route: getPathProfile('1'),
                initialState: {
                    user: {
                        _isMounted: true,
                        authData: {
                            id: '1',
                            userName: 'Bob',
                        },
                    },
                },
            });

            const page = await screen.findByTestId('ProfilePage');
            expect(page).toBeInTheDocument();
        },
    );

    test(
        'admin page should not be loaded if authorized user has no needed role',
        async () => {
            componentRender(<AppRouter />, {
                route: getPathAdmin(),
                initialState: {
                    user: {
                        _isMounted: true,
                        authData: {
                            id: '1',
                            userName: 'Bob',
                        },
                    },
                },
            });

            const page = await screen.findByTestId('ForbiddenPage');
            expect(page).toBeInTheDocument();
        },
    );

    test(
        'admin page should be loaded if authorized user has role admin',
        async () => {
            componentRender(<AppRouter />, {
                route: getPathAdmin(),
                initialState: {
                    user: {
                        _isMounted: true,
                        authData: {
                            roles: [UserRoles.ADMIN],
                            id: '1',
                            userName: 'Bob',
                        },
                    },
                },
            });

            const page = await screen.findByTestId('AdminPage');
            expect(page).toBeInTheDocument();
        },
    );

    test(
        'admin page should be loaded if authorized user has role manager',
        async () => {
            componentRender(<AppRouter />, {
                route: getPathAdmin(),
                initialState: {
                    user: {
                        _isMounted: true,
                        authData: {
                            roles: [UserRoles.MANAGER],
                            id: '1',
                            userName: 'Bob',
                        },
                    },
                },
            });

            const page = await screen.findByTestId('AdminPage');
            expect(page).toBeInTheDocument();
        },
    );
});
