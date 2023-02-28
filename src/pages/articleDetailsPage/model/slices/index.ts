import { combineReducers } from '@reduxjs/toolkit';
import { IArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articlesDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articlesDetailsRecommendationsSlice';

export const articleDeatilsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
