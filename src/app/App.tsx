import { Link } from 'react-router-dom';
import { useTheme } from './providers';
import { classNames } from 'shared/utils';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets';
import './styles/index.scss';


export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
    )
}