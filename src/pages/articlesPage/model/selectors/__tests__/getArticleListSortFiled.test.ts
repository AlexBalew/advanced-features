import { StateSchema } from 'app/providers';
import { ArticleSortField } from 'entities/Article/model';
import { getArticleListSortField } from '../getArticleListSortFiled';

describe('getArticleListSortField test', () => {
    test('getArticleListSortField return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                sortField: ArticleSortField.Title,
            },
        };
        expect(getArticleListSortField(state as StateSchema))
            .toEqual(state.articlesPage?.sortField);
    });

    test(
        "getArticleListSortField should return 'created at' field if there is no data in state",
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleListSortField(state as StateSchema)).toBe(ArticleSortField.Created_At);
        },
    );
});
