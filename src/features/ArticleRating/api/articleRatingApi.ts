import { IRating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api';

interface IGetArticleRRating {
    userId: string;
    articleId: string;
}

interface IRateArticleArgs {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        GetArticleRating: build.query<IRating[], IGetArticleRRating>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        RateArticle: build.mutation<void, IRateArticleArgs>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
