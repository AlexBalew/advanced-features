import { AboutPage, MainPage } from 'pages';
import { RouteProps } from 'react-router-dom';

export const enum AppRoutes {
    Main = 'main',
    About = 'about',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: routePath.main,
        element: <MainPage />
    },
    [AppRoutes.About]: {
        path: routePath.about,
        element: <AboutPage />,
    }
}