import { EditableProfileCard } from '../../src/features/EditableProfileCard';
import { TestProvider } from '../../src/shared/utils/componentRender';

const userId = '4';

describe('EditableProfileCard test', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: userId,
                                userName: 'testuser',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={userId} />
            </TestProvider>,
        );
    });
});
