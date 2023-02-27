import { ArticleList } from 'entities/Article';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/utils';
import { Page } from 'widgets';
import { getArticleListIsLoading, getArticleListView } from '../model/selectors';
import { fetchNextArticlesPage, initArticlesPage } from '../model/services';
import {
    articlesPageReducer,
    getArticles,
} from '../model/slice/articlePageSlice';
import { ArticlesPageFilter } from './ArtcilesPageFilter/ArticlesPageFilter';
import classes from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticleListIsLoading);
    const view = useSelector(getArticleListView);
    const [searchParams] = useSearchParams();

    const onLoadNextDataPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicComponentLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(classes.root, {}, [])}
                onEndScroll={onLoadNextDataPart}
            >
                <ArticlesPageFilter />
                <ArticleList
                    className={classes.list}
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicComponentLoader>
    );
};

export default ArticlesPage;
