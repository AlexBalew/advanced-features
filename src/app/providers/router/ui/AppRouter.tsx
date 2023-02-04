import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/page-loader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
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

export default AppRouter;
