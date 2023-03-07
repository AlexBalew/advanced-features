import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppAuthRoutes, routeConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/page-loader';
import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({
            path,
            element,
            isAuthorized,
            roles,
        }: AppAuthRoutes) => (
            <Route
                key={path}
                path={path}
                element={isAuthorized
                    ? (
                        <RequireAuth>
                            <RequireRole roles={roles}>
                                <Suspense fallback={<PageLoader />}>
                                    {element}
                                </Suspense>
                            </RequireRole>
                        </RequireAuth>
                    )
                    : (
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    )}
            />
        ))}
    </Routes>
);

export default memo(AppRouter);
