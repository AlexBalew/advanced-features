import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StoreWithManager } from '@/app/providers/store-provider';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema, StateSchemaKey } from '@/app/providers/store-provider/config/StateSchema';

export type ReducersList = {
    [reducerName in StateSchemaKey]?: Reducer<NonNullable<StateSchema[reducerName]>>;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicComponentLoader: FC<IProps> = ({
    reducers,
    children,
    removeAfterUnmount = true,
}) => {
    const store = useStore() as StoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            const mounted = mountedReducers[reducerName as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(reducerName as StateSchemaKey, reducer);
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]) => {
                    store.reducerManager.remove(reducerName as StateSchemaKey);
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
