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
import { Page } from 'widgets';
import {
    getArticleListIsLoading,
    getArticleListView,
} from '../model/selectors';
import { fetchArticles, fetchNextArticlesPage } from '../model/services';
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

    const onChangeView = useCallback((view: ArticleListView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextDataPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticles({
            page: 1,
        }));
    });

    return (
        <DynamicComponentLoader reducers={reducers}>
            <Page
                className={classNames(classes.root, {}, [])}
                onEndScroll={onLoadNextDataPart}
            >
                <ViewSwitcher view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicComponentLoader>
    );
};

export default ArticlesPage;
