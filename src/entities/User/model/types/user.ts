import { UserRoles } from '../constants';

export interface IUser {
    id: string;
    userName: string;
    avatar?: string;
    roles?: UserRoles[];
}

export interface IUserSchema {
    authData?: IUser;
    _isMounted?: boolean;
}
