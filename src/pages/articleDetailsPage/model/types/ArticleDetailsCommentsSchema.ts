import { IComment } from 'entities/Comment/model/types';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticleDetailsCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
