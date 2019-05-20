import {auth} from '../../../support/desktop/authorization';

describe('Выход', () => {

    it('C18768 Выход', () => {
        cy.visit('/');
        // метод авторизации
        auth.login();
        // метод выхода
        auth.logout();
    });
});
