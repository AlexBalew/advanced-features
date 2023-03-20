import { IArticle } from '../../../src/entities/Article';

const defaultArticle = {
    userId: '2',
    title: 'Test Article',
    subtitle: 'test',
    // eslint-disable-next-line max-len
    img: 'data:image/png;base64,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',
    views: 8888,
    createdAt: '01/01/9999',
    type: [
        'test',
    ],
    blocks: [],
};

export const createArticle = (article?: IArticle) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'testuser' },
    body: article ?? defaultArticle,
}).then((res) => res.body);

export const deleteArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'testuser' },
});

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?: IArticle): Chainable<IArticle>;
        deleteArticle(articleId: string): Chainable<void>;
      }
    }
  }
