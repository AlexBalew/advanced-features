import { createReduxStore } from 'app/providers';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';

interface IProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: IProps) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
