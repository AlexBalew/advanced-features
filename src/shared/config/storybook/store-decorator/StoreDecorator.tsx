import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { articleDetailsReducer } from '@/entities/Article/model/slice/artcileDetailsSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleDeatilsPageReducer } from '@/pages/articleDetailsPage/model';
import { ReducersList } from '@/shared/utils';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
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
