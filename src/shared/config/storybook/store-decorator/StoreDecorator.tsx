import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { articleDetailsReducer } from 'entities/Article/model/slice/artcileDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentReducer } from 'features/AddNewComment/model/slice/addCommentSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsCommentsReducer } from 'pages/articleDetailsPage/model';
import { ReducersList } from 'shared/utils';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addComment: addCommentReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
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
