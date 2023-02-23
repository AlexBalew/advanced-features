import { ArticleListView } from 'entities/Article';
import { StateSchema } from 'app/providers';
import { getArticleListLimit } from '../getArticleListLimit';

describe('getArticleListLimit test', () => {
    test('getArticleListLimit return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
                limit: 4,
            },
        };
        expect(getArticleListLimit(state as StateSchema)).toEqual(state.articlesPage?.limit);
    });

    test('getArticleListLimit should return correct type if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListLimit(state as StateSchema)).toBe(9);
    });
});
