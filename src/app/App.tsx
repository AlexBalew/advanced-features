import { useTheme } from './providers';
import { classNames } from 'shared/utils';
import { AppRouter } from './providers/router';
import { Navbar, Sidebar } from 'widgets';
import { Suspense } from 'react';
import './styles/index.scss';

export const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className='content'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}