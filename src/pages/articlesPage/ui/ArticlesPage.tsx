import { ArticleList, ArticleListView } from 'entities/Article';
import { ViewSwitcher } from 'features/ViewSwither';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/utils';
import {
    getArticleListError,
    getArticleListIsLoading,
    getArticleListView,
} from '../model/selectors';
import { fetchArticles } from '../model/services/fetchArticles';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../model/slice/articlePageSlice';
import classes from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticleListIsLoading);
    const view = useSelector(getArticleListView);
    const error = useSelector(getArticleListError);

    const onChangeView = useCallback((view: ArticleListView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticles());
        dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicComponentLoader reducers={reducers}>
            <div className={classNames(classes.root, {}, [])}>
                <ViewSwitcher view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicComponentLoader>
    );
};

export default ArticlesPage;
