import { EntityState } from '@reduxjs/toolkit';
import {
    ArticleListView,
    ArticleSortField,
    ArticleType,
    IArticle,
} from 'entities/Article';
import { SortType } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
    view: ArticleListView;
    page: number;
    limit: number;
    hasMore: boolean;
    _isInitialized?: boolean;
    order: SortType;
    searchValue: string;
    sortField: ArticleSortField;
    type: ArticleType;
}
