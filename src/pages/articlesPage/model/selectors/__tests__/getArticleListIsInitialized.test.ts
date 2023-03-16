import { ArticleListView } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListIsInitialized } from '../getArticleListIsInitialized';

describe('getArticleListIsInitialized test', () => {
    test('getArticleListIsInitialized return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
                _isInitialized: true,
            },
        };
        expect(getArticleListIsInitialized(state as StateSchema)).toBe(true);
    });

    test('getArticleListIsInitialized should return false if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListIsInitialized(state as StateSchema)).toBe(false);
    });
});
