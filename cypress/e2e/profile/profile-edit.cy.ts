let profileId: string;

describe('edit profile', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('edit page loads successfully', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'Test');
    });

    it('user edits his profile page', () => {
        const newFirstName = 'test firstname';
        const newLastName = 'test lastname';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.FirstName').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.LastName').should('have.value', newLastName);
    });
});
