import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { enGB } from 'shared/dictionaries';
import {
    classNames,
    DynamicComponentLoader,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/utils';
import { Text } from 'shared/ui';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddNewComment';
import { useCallback } from 'react';
import classes from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer } from '../model';
import { getArticleComments } from '../model/slices/articlesDetailsCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Text title={t(enGB.NO_ARTICLE)} />
        );
    }

    return (
        <DynamicComponentLoader reducers={reducers}>
            <div className={classNames(classes.root, {}, [])}>
                <ArticleDetails id={id} />
                <Text className={classes.commentTitle} title={t(enGB.COMMENTS)} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicComponentLoader>
    );
};

export default ArticleDetailsPage;
