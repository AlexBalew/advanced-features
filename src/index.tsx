import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/store-provider';
import { ErrorBoundary } from '@/app/providers/error-boundary';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { App } from './app/App';
import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
