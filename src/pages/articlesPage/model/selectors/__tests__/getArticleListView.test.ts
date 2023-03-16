import { ArticleListView } from '@/entities/Article';
import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListView } from '../getArticleListView';

describe('getArticleListView test', () => {
    test('getArticleListView return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
            },
        };
        expect(getArticleListView(state as StateSchema)).toEqual(state.articlesPage?.view);
    });

    test('getArticleListView should return correct type if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListView(state as StateSchema)).toBe(ArticleListView.List);
    });
});
