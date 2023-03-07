import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddNewComment';
import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { enGB } from 'shared/dictionaries';
import { Column, Text, TextSize } from 'shared/ui';
import { classNames, useAppDispatch, useInitialEffect } from 'shared/utils';
import { addCommentForArticle, fetchCommentsByArticleId } from '../../model/services';
import { getArticleCommentsIsLoading } from '../../model/selectors';
import { getArticleComments } from '../../model';

interface IProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(({ id, className }: IProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <Column
            max
            gap="16"
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t<string>(enGB.COMMENTS)}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </Column>
    );
});
