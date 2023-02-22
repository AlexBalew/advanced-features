import { IconName } from 'shared/ui';

export interface ISidebarItem {
    path: string;
    IconNname: IconName;
    linkTitle: string;
    isAuth?: boolean;
}
