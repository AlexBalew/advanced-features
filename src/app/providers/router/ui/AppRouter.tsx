import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/page-loader';
import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';
import { routeConfig } from '../config/routeConfig';
import { AppAuthRoutes } from '@/shared/types/router';

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
