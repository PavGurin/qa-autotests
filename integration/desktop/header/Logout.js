import {auth} from '../../../support/desktop/Authorization';

describe('Выход', () => {

    it('C18768 Выход', () => {
        cy.visit('/');
        // метод авторизации
        auth.login();
        // метод выхода
        auth.logout();
    });
});
