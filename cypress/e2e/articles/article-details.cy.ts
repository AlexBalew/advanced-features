let currentArticleId = '';

describe('article-details', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((data) => {
            currentArticleId = data.id;
            cy.visit(`article/${data.id}`);
        });
    });

    afterEach(() => {
        cy.deleteArticle(currentArticleId);
    });

    it('article is successfully loaded', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('recommendations list is successfully loaded', () => {
        cy.getByTestId('ArticleRecommendations').should('exist');
    });

    it('user can send comment on the article', () => {
        cy.intercept('GET', '**/artciles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test text');
        cy.getByTestId('CommentCard.Content').should('contain.text', 'test text');
    });
});
