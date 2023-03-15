import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui';
import { IArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: IArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
