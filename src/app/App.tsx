import { Link } from 'react-router-dom';
import { useTheme } from './providers';
import { classNames } from 'shared/utils';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Switch theme</button>
            <br />
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter />
        </div>
    )
}