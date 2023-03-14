import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/utils';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { getUserIsMounted, userActions } from '@/entities/User';
import { Loader } from '@/shared/ui';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const dispatch = useDispatch();
    const isMounted = useSelector(getUserIsMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content">
                    <Sidebar />
                    {isMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
