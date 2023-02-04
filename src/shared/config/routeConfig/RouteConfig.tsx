/* eslint-disable no-unused-vars */
import { AboutPage, MainPage, NotFoundPage } from 'pages';
import { RouteProps } from 'react-router-dom';

export const enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.NotFound]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [AppRoutes.About]: {
        path: routePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NotFound]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },
};