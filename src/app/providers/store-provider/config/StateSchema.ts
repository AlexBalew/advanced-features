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
import { addCommentFormSchema } from 'features/AddNewComment';
import { ILoginSchema } from 'features/AuthByUsername';
import { IScrollSaverSchema } from 'features/ScrollSaver';
import { IArticleDetailsCommentsSchema } from 'pages/articleDetailsPage';
import { ArticlesPageSchema } from 'pages/articlesPage/model';

export interface StateSchema {
    user: IUserSchema;
    scrollSaver: IScrollSaverSchema;

    // async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
    addComment?: addCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => OptionalRecord<StateSchemaKey, boolean>;
}
export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
