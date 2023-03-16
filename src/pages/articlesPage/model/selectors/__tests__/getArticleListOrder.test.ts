// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { getArticleListOrder } from '../getArticleListOrder';

describe('getArticleListOrder test', () => {
    test('getArticleListOrder return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                order: 'desc',
            },
        };
        expect(getArticleListOrder(state as StateSchema)).toEqual(state.articlesPage?.order);
    });

    test('getArticleListOrder should return asc if there is no data in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListOrder(state as StateSchema)).toBe('asc');
    });
});
