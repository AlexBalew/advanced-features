import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { RoutePath } from 'shared/config';

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
