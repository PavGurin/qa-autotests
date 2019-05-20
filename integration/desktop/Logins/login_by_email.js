import {auth} from '../../../support/desktop/authorization';

describe('Авторизация по email', () => {
    // it('C16300 - Авторизация по email', () => {
    //     cy.visit('/');
    //     // авторизация
    //     auth.login();
    //     cy.screenshot();
    //     // выход
    //     auth.logout();
    // });

    it('C18769 - Авторизация по email, Невалидные данные', () => {
        cy.visit('/');
        // авторизация с невалидными данными
        // auth.login_invalid();

auth.login()
        cy.screenshot();
    });
});
