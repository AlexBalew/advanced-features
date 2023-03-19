import { USER_LS_KEY } from '../../../src/shared/constants/constants';

export const login = (userName: string = 'testuser', password: string = 'qwerty') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            userName,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body));
    });
};
