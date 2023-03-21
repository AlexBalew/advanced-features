/* eslint-disable balev-fsd-path-plugin/layer-imports */
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { Theme } from '../constants/theme';
import { ThemeProvider } from '@/app/providers/theme-provider';
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider({ children, options = {} }: TestProviderProps) {
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.Light,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <ThemeProvider initialTheme={theme}>
                    {children}
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(
    children: ReactNode,
    options: ComponentRenderOptions = {},
) {
    return render(
        <TestProvider options={options}>
            {children}
        </TestProvider>,
    );
}
