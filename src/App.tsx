import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AboutPageAsync, MainPageAsync } from './pages';
import { Suspense } from 'react';
import './index.scss';

export const App = () => {

    return (
        <div className='app'>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>} >
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}