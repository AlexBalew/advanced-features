import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Rating } from '@/entities/Rating';
import { enGB } from '@/shared/dictionaries';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui';

export interface IArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo(({ className, articleId }: IArticleRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id ?? '',
        articleId,
    });

    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <Rating
            className={className}
            title={t<string>(enGB.RATE_THIS_ARTICLE)}
            feedbackTitle={t<string>(enGB.LEAVE_YOUR_FEEDBACK)}
            rate={rating?.rate}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating;
