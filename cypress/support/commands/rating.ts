export const setRate = (starsCount = 5, feedback = 'feedback') => {
    cy.getByTestId(`Rating.${starsCount}`).click();
    cy.getByTestId('Rating.Input').type(feedback);
    cy.getByTestId('Rating.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
