import { classNames } from 'shared/utils';
import { Navbar, Sidebar } from 'widgets';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
