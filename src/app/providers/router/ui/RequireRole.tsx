import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { getUserRoles, UserRoles } from '@/entities/User';
import { getPathForbidden } from '@/shared/config';

interface IProps {
    children: JSX.Element;
    roles?: UserRoles[];
}

export const RequireRole = ({ children, roles }: IProps) => {
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    if (!hasRequiredRoles) {
        return <Navigate to={getPathForbidden()} state={{ from: location }} replace />;
    }

    return children;
};
