import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/page-loader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element, isAuthorized }) => (
            <Route
                key={path}
                path={path}
                element={isAuthorized
                    ? (
                        <RequireAuth>
                            <Suspense fallback={<PageLoader />}>
                                <div className="content-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        </RequireAuth>
                    )
                    : (
                        <Suspense fallback={<PageLoader />}>
                            <div className="content-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
            />
        ))}
    </Routes>
);

export default memo(AppRouter);
