import { ArticleListView } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListError } from '../getArticleListError';

describe('getArticleListError test', () => {
    test('getArticleListError return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
                error: 'error',
            },
        };
        expect(getArticleListError(state as StateSchema)).toEqual(state.articlesPage?.error);
    });

    test('getArticleListError should return undefined if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListError(state as StateSchema)).toBe(undefined);
    });
});
