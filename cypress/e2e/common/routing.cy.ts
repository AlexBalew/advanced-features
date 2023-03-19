import { selectByTestId } from '../../utils/selectByTestId';

describe('routing test', () => {
    describe('unauthorized user', () => {
        it('main page opening', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('profile page opening', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('invalid route opening', () => {
            cy.visit('/invalid-route');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('authorized user', () => {
        beforeEach(() => {
            cy.login();
        });

        it('profile page opening', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('articles list page opening', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
