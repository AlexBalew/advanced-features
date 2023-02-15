import {
    AboutPage,
    MainPage,
    ProfilePage,
    NotFoundPage,
} from 'pages';
import { RouteProps } from 'react-router-dom';

type AppAuthRoutes = RouteProps & {
    isAuthorized?: boolean;
}

export const enum AppRoutes {
    Main = 'main',
    About = 'about',
    Profile = 'profile',
    NotFound = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.Profile]: '/profile',
    [AppRoutes.NotFound]: '*',
};

export const routeConfig: Record<AppRoutes, AppAuthRoutes> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.Profile]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        isAuthorized: true,
    },
    [AppRoutes.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
