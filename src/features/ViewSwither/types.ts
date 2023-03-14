import { ReactNode } from 'react';
import { ArticleListView } from '@/entities/Article';

export interface IView {
    view: ArticleListView;
    icon: ReactNode;
}
