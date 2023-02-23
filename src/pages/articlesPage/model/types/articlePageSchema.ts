import { EntityState } from '@reduxjs/toolkit';
import { ArticleListView, IArticle } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
    view: ArticleListView;
}
