import { selectByTestId } from '../../utils/selectByTestId';
import { IUser } from '../../../src/entities/User';
import { USER_LS_KEY } from '../../../src/shared/constants/constants';

export const login = (userName: string = 'testuser', password: string = 'qwerty') => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
        userName,
        password,
    },
}).then(({ body }) => {
    window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body));
    return body;
});

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
      interface Chainable {
        login(email?: string, password?: string): Chainable<IUser>;
        getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      }
    }
  }
