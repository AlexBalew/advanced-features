import {
    EnhancedStore,
    ReducersMapObject,
    Reducer,
    AnyAction,
    CombinedState,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'entities/Article';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { IArticleDetailsCommentsSchema } from 'pages/articleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
    user: IUserSchema;
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
