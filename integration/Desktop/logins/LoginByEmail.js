import {auth} from '../../../support/desktop/Authorization';

describe('Авторизация', () => {
    it('C16300 - Авторизация по email', () => {
        cy.visit('/');
        // авторизация
        auth.login();
        cy.screenshot();
        // выход
        auth.logout();
    });

    it('C18769 - Авторизация по email с неверным паролем', () => {
        cy.visit('/');
        // авторизация существующего пользователя с неверным паролем
        auth.login_invalid_password();
        cy.screenshot();
    });

    it('C18784 - Авторизация с пустым полем email/телефон или пароль', () => {
        cy.visit('/');
        // авторизация с пустыми полями логина или пароля
        auth.login_empty_mandatory_fields();
        cy.screenshot();
    });

    it('C18786 - Авторизация с несуществующим пользователем', () => {
        cy.visit('/');
        // авторизация несуществующего пользователя
        auth.login_nonexistent_user();
        cy.screenshot();
    });
});

