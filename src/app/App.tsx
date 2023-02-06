import { classNames } from 'shared/utils';
import { Navbar, Sidebar } from 'widgets';
import { Suspense, useState } from 'react';
import { Button, Modal } from 'shared/ui';
import { AppRouter } from './providers/router';
import { useTheme } from './providers';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    const [isModalOpened, setModalOpened] = useState<boolean>(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Button onClick={() => setModalOpened(true)}>
                    open modal
                </Button>
                <Modal
                    isOpened={isModalOpened}
                    onClose={() => setModalOpened(false)}
                >
                    Donec arcu libero, fermentum vel vulputate ut,
                    faucibus in mi. Vivamus feugiat lorem ac volutpat
                    lacinia. Nulla aliquam dolor eu diam porttitor ullamcorper.
                    Sed tempus, turpis sed molestie blandit, magna erat tempor sem,
                    vitae condimentum ipsum erat et tortor. In maximus quis lorem sed malesuada.
                </Modal>
                <div className="content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
