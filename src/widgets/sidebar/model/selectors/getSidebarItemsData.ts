import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ISidebarItem } from '../types';
import {
    getPathAbout,
    getPathArticles,
    getPathMain,
    getPathProfile,
} from '@/shared/config/routeConfig/RouteConfig';

export const getSidebarItemsData = createSelector(getUserAuthData, (userData): ISidebarItem[] => {
    const sideBarItemsList: ISidebarItem[] = [
        {
            path: getPathMain(),
            IconNname: 'Home',
            linkTitle: 'Home',
        },
        {
            path: getPathAbout(),
            IconNname: 'AboutUs',
            linkTitle: 'About us',
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path: getPathProfile(userData?.id),
                IconNname: 'Profile',
                linkTitle: 'Profile',
                isAuth: true,
            },
            {
                path: getPathArticles(),
                IconNname: 'Articles',
                linkTitle: 'Articles',
                isAuth: true,
            },
        );
    }

    return sideBarItemsList;
});
