import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, MainPage } from '../pages';
import { Suspense } from 'react';
import { useTheme } from './providers';
import { classNames } from '../shared/utils';
import './styles/index.scss';


export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Switch theme</button>
            <br />
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>} >
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}