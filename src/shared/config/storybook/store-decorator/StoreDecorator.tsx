/* eslint-disable balev-fsd-path-plugin/layer-imports */
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { profileReducer } from '@/features/EditableProfileCard';
import { ReducersList } from '@/shared/utils';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { articleDeatilsPageReducer } from '@/pages/articleDetailsPage/testing';
import { addCommentReducer } from '@/features/AddNewComment/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addComment: addCommentReducer,
    articleDetailsPage: articleDeatilsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
