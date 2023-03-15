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

export const getPathMain = (): string => '/';
export const getPathAbout = (): string => '/about';
export const getPathProfile = (id: string): string => `/profile/${id}`;
export const getPathArticles = (): string => '/articles';
export const getPathArticleDetails = (id: string): string => `/article/${id}`;
export const getPathArticleCreate = (): string => '/article/create';
export const getPathArticleEdit = (id: string): string => `/article/${id}/edit`;
export const getPathAdmin = (): string => '/admin';
export const getPathForbidden = (): string => '/forbidden';

export const routeConfig: Record<AppRoutes, AppAuthRoutes> = {
    [AppRoutes.Main]: {
        path: getPathMain(),
        element: <MainPage />,
    },
    [AppRoutes.About]: {
        path: getPathAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.Profile]: {
        path: getPathProfile(':id'),
        element: <ProfilePage />,
        isAuthorized: true,
    },
    [AppRoutes.Articles]: {
        path: getPathArticles(),
        element: <ArticlesPage />,
        isAuthorized: true,
    },
    [AppRoutes.Article_details]: {
        path: getPathArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        isAuthorized: true,
    },
    [AppRoutes.Article_create]: {
        path: getPathArticleCreate(),
        element: <ArticleEditPage />,
        isAuthorized: true,
    },
    [AppRoutes.Article_edit]: {
        path: getPathArticleEdit(':id'),
        element: <ArticleEditPage />,
        isAuthorized: true,
    },
    [AppRoutes.Admin]: {
        path: getPathAdmin(),
        element: <AdminPage />,
        isAuthorized: true,
        roles: [UserRoles.ADMIN, UserRoles.MANAGER],
    },
    [AppRoutes.Forbidden]: {
        path: getPathForbidden(),
        element: <ForbiddenPage />,
        isAuthorized: true,
    },
    [AppRoutes.NotFound]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
