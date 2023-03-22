import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { UserRoles } from '@/entities/User';

export type AppAuthRoutes = RouteProps & {
    isAuthorized?: boolean;
    roles?: UserRoles[];
};
