import { StateSchema } from 'app/providers';
import { ArticleType } from 'entities/Article/model';
import { getArticleType } from '../getArticleType';

describe('getArticleType test', () => {
    test('getArticleType return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                type: ArticleType.Comics,
            },
        };
        expect(getArticleType(state as StateSchema))
            .toEqual(state.articlesPage?.type);
    });

    test(
        "getArticleType should return 'All' field if there is no data in state",
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleType(state as StateSchema)).toBe(ArticleType.All);
        },
    );
});
