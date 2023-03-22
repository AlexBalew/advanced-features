import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListSearchValue } from '../getArticleListSearchValue';

describe('getArticleListSearchValue test', () => {
    test('getArticleListSearchValue return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                order: 'desc',
                searchValue: 'search',
            },
        };
        expect(getArticleListSearchValue(state as StateSchema)).toEqual(
            state.articlesPage?.searchValue,
        );
    });

    test('getArticleListSearchValue should return empty if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListSearchValue(state as StateSchema)).toBe('');
    });
});
