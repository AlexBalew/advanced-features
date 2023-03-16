import { ArticleListView } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListHasMore } from '../getArticleListPageHasMore';

describe('getArticleListHasMore test', () => {
    test('getArticleListHasMore return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
                hasMore: false,
            },
        };
        expect(getArticleListHasMore(state as StateSchema)).toBe(false);
    });

    test('getArticleListHasMore should return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListHasMore(state as StateSchema)).toBe(undefined);
    });
});
