import { ArticleDetails, ArticleList, ArticleListView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { enGB } from 'shared/dictionaries';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/utils';
import { Button, Text, TextSize } from 'shared/ui';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddNewComment';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config';
import { Page } from 'widgets';
import {
    articleDeatilsPageReducer,
    getArticleComments,
    getArticleRecommendations,
} from '../model';
import {
    getArticleCommentsIsLoading,
    getArticleRecommendationsIsLoading,
} from '../model/selectors';
import {
    fetchCommentsByArticleId,
    fetchArticleRecommendations,
    addCommentForArticle,
} from '../model/services';
import classes from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsPage: articleDeatilsPageReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onbackToArticleList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <Page>
                <Text title={t(enGB.NO_ARTICLE)} />
            </Page>
        );
    }

    return (
        <DynamicComponentLoader reducers={reducers}>
            <Page className={classNames(classes.root, {}, [])}>
                <Button onClick={onbackToArticleList}>
                    {t(enGB.BACK)}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={classes.commentTitle}
                    title={t(enGB.RECOMMENDATIONS)}
                />
                <ArticleList
                    className={classes.recommendations}
                    articles={recommendations}
                    view={ArticleListView.Tiles}
                    target="_blank"
                    isLoading={recommendationsIsLoading}
                />
                <Text
                    size={TextSize.L}
                    className={classes.commentTitle}
                    title={t(enGB.COMMENTS)}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicComponentLoader>
    );
};

export default ArticleDetailsPage;
