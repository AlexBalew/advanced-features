import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AboutPageAsync, MainPageAsync } from './pages';
import { Suspense } from 'react';
import { useTheme } from './theme/hooks';
import './styles/index.scss';

export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Switch theme</button>
            <br />
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