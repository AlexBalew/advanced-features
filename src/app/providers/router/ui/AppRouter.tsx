import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppAuthRoutes, routeConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/page-loader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element, isAuthorized }: AppAuthRoutes) => (
            <Route
                key={path}
                path={path}
                element={isAuthorized
                    ? (
                        <RequireAuth>
                            <Suspense fallback={<PageLoader />}>
                                {element}
                            </Suspense>
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
