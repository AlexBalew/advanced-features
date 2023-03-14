import { RouteProps } from 'react-router-dom';
import { UserRoles } from '@/entities/User';
import { AboutPage } from '@/pages/aboutPage';
import { AdminPage } from '@/pages/adminPage';
import { ArticleDetailsPage } from '@/pages/articleDetailsPage';
import { ArticleEditPage } from '@/pages/articleEditPage';
import { ArticlesPage } from '@/pages/articlesPage';
import { ForbiddenPage } from '@/pages/forbiddenPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/not-found-page';
import { ProfilePage } from '@/pages/profilePage';

export type AppAuthRoutes = RouteProps & {
    isAuthorized?: boolean;
    roles?: UserRoles[];
}

export const enum AppRoutes {
    Main = 'main',
    About = 'about',
    Profile = 'profile',
    Articles = 'articles',
    Article_details = 'article',
    Article_create = 'article_create',
    Article_edit = 'article_edit',
    Admin = 'admin',
    Forbidden = 'forbidden',
    NotFound = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.Profile]: '/profile/',
    [AppRoutes.Articles]: '/articles',
    [AppRoutes.Article_details]: '/article/',
    [AppRoutes.Article_create]: '/article/create',
    [AppRoutes.Article_edit]: '/article/:id/edit',
    [AppRoutes.Admin]: '/admin',
    [AppRoutes.Forbidden]: '/forbidden',
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
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        isAuthorized: true,
    },
    [AppRoutes.Articles]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        isAuthorized: true,
    },
    [AppRoutes.Article_details]: {
        path: `${RoutePath.article}:id`,
        element: <ArticleDetailsPage />,
        isAuthorized: true,
    },
    [AppRoutes.Article_create]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
        isAuthorized: true,
    },
    [AppRoutes.Article_edit]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage />,
        isAuthorized: true,
    },
    [AppRoutes.Admin]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        isAuthorized: true,
        roles: [UserRoles.ADMIN, UserRoles.MANAGER],
    },
    [AppRoutes.Forbidden]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
        isAuthorized: true,
    },
    [AppRoutes.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
