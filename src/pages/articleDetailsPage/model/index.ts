export {
    articleDetailsCommentsReducer,
    getArticleComments,
} from './slices/articlesDetailsCommentsSlice';
export {
    articleDetailsRecommendationsReducer,
    getArticleRecommendations,
} from './slices/articlesDetailsRecommendationsSlice';
export type {
    IArticleDetailsRecommendationsSchema,
} from './types/ArticleDetailsRecommendationsSchema';
export type { IArticleDetailsPageSchema } from './types';
export { articleDeatilsPageReducer } from './slices/index';
export { getCanEditArticle } from './selectors';
