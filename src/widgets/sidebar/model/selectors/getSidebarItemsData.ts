import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/RouteConfig';
import { ISidebarItem } from '../types';

export const getSidebarItemsData = createSelector(
    getUserAuthData,
    (userData): ISidebarItem[] => {
        const sideBarItemsList: ISidebarItem[] = [
            {
                path: RoutePath.main,
                IconNname: 'Home',
                linkTitle: 'Home',
            },
            {
                path: RoutePath.about,
                IconNname: 'AboutUs',
                linkTitle: 'About us',
            },
        ];

        if (userData) {
            sideBarItemsList.push(
                {
                    path: `${RoutePath.profile}${userData?.id}`,
                    IconNname: 'Profile',
                    linkTitle: 'Profile',
                    isAuth: true,
                },
                {
                    path: RoutePath.articles,
                    IconNname: 'Articles',
                    linkTitle: 'Articles',
                    isAuth: true,
                },
            );
        }

        return sideBarItemsList;
    },
);
