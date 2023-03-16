import { ArticleListView } from '@/entities/Article';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListPageNum } from '../getArticleListPageNum';

describe('getArticleListPageNum test', () => {
    test('getArticleListPageNum return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.Tiles,
                page: 4,
            },
        };
        expect(getArticleListPageNum(state as StateSchema)).toEqual(state.articlesPage?.page);
    });

    test('getArticleListPageNum should return 1 if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListPageNum(state as StateSchema)).toBe(1);
    });
});
