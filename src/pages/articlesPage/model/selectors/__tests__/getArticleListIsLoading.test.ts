import { ArticleListView } from 'entities/Article';
import { StateSchema } from 'app/providers';
import { getArticleListIsLoading } from '../getArticleListIsLoading';

describe('getArticleListIsLoading test', () => {
    test('getArticleListIsLoading return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
                isLoading: true,
            },
        };
        expect(getArticleListIsLoading(state as StateSchema)).toBe(true);
    });

    test('getArticleListIsLoading should return false if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListIsLoading(state as StateSchema)).toBe(false);
    });
});
