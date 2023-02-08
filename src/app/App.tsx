import { classNames } from 'shared/utils';
import { Navbar, Sidebar } from 'widgets';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { Loader } from 'shared/ui';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
