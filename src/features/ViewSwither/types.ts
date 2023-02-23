import { ArticleListView } from 'entities/Article';
import { ReactNode } from 'react';

export interface IView {
    view: ArticleListView;
    icon: ReactNode;
}
