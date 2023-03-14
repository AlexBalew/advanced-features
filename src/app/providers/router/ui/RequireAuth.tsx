import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/RouteConfig';

interface IProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: IProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
