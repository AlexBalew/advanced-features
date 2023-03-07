import { IArticle } from 'entities/Article';
import { rtkApi } from 'shared/api';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<IArticle[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useGetArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery;
