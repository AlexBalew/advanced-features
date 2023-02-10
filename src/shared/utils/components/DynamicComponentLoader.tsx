import { Reducer } from '@reduxjs/toolkit';
import { StoreWithManager } from 'app/providers';
import { StateSchemaKey } from 'app/providers/store-provider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
    [reducerName in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicComponentLoader: FC<IProps> = ({
    reducers,
    children,
    removeAfterUnmount,
}) => {
    const store = useStore() as StoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerName, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerName);
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
