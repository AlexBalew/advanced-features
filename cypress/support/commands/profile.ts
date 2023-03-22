export const updateProfile = (newFirstName: string, newLastName: string) => {
    cy.getByTestId('ProfilePageHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstName').clear().type(newFirstName);
    cy.getByTestId('ProfileCard.LastName').clear().type(newLastName);
    cy.getByTestId('ProfilePageHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'testuser' },
        body: {
            id: '4',
            firstname: 'Test',
            lastname: 'User',
            age: 1,
            currency: 'EUR',
            country: 'Canada',
            city: 'Toronto',
            username: 'testuser',
            // eslint-disable-next-line max-len
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypXDphKoD5kuzgrgPXONIjlzGMNx-eZXKnA&usqp=CAU',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(newFirstName: string, newLastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
