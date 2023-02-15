import { RoutePath } from 'shared/config';
import { IconName } from 'shared/ui/icon';

export interface ISidebarItem {
    path: string;
    IconNname: IconName;
    linkTitle: string;
    isAuth?: boolean;
}

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
];
