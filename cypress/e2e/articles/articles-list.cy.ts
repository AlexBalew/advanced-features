describe('articles list', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });

    it('should be loaded successfully', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
