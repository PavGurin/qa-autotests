import { auth } from '../../../support/desktop/Authorization';

describe('Logout', () => {

    it('C18768 Выход', () => {
        cy.visit('/');
        // метод авторизации
        auth.login();
        // метод выхода
        auth.logout();
    });
});
