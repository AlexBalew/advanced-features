import { RouteProps } from 'react-router-dom';
import { UserRoles } from '@/entities/User';

export type AppAuthRoutes = RouteProps & {
    isAuthorized?: boolean;
    roles?: UserRoles[];
}
