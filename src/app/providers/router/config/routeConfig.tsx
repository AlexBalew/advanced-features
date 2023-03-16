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
import {
    getPathMain,
    getPathAbout,
    getPathProfile,
    getPathArticles,
    getPathArticleDetails,
    getPathArticleCreate,
    getPathArticleEdit,
    getPathAdmin,
    getPathForbidden,
} from '@/shared/config/routeConfig/RouteConfig';
import { AppRoutes } from '@/shared/constants/router';
import { AppAuthRoutes } from '@/shared/types/router';

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
