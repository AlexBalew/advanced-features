import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/utils';
import { Page } from 'widgets';
import { fetchNextArticlesPage, initArticlesPage } from '../model/services';
import { articlesPageReducer } from '../model/slice/articlePageSlice';
import { ArticlesPageFilter } from './ArtcilesPageFilter/ArticlesPageFilter';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import classes from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
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
                <ArticleInfiniteList className={classes.list} />
            </Page>
        </DynamicComponentLoader>
    );
};

export default ArticlesPage;
