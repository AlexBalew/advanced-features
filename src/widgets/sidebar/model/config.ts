import { RoutePath } from 'shared/config';
import { ISidebarItem } from './types/items';

export const SidebarItemList: ISidebarItem[] = [
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
    {
        path: RoutePath.profile,
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
    {
        path: RoutePath.article,
        IconNname: 'Details',
        linkTitle: 'Article details',
        isAuth: true,
    },
];
