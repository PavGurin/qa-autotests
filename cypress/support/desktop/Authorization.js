/**
 Методы авторизации
 **/

const user_info = 'div.user-info';
const entry_button = 'button.button.secondary';
const login_input = 'input[name=login]';
const password_input = 'input[name=password]';
const login_confirm = 'button[type=submit]';
const auth_window = 'div.modal-container';
const logout_question = '.logout-question';
const notification = '.notification-content';

export const auth = {

    login() {
        // нажимаем кнопку 'Войти' со стартовой страницы
        cy.get(entry_button)
          .click();
        // вводим логин/пароль
        cy.get(login_input)
          .type('nogm75@1win.xyz')
          .should('have.value', 'nogm75@1win.xyz');
        cy.get(password_input)
          .type('123456');
        // нажимаем кнопку 'Войти' в меню авторизации
        cy.get(login_confirm)
          .click();
        // проверяем, что пользователь залогинился
        cy.get(user_info)
          .should('exist');
    },

    // авторизация по параметрам логина/пароля
    loginAs(login, password) {
        // нажимаем кнопку 'Войти' со стартовой страницы
        cy.get(entry_button)
          .click();
        // вводим логин/пароль
        cy.get(login_input)
          .type(login)
          .should('have.value', login);
        cy.get(password_input)
          .type(password);
        // нажимаем кнопку 'Войти' в меню авторизации
        cy.get(login_confirm)
          .click();
        // проверяем, что пользователь залогинился
        cy.get(user_info)
          .should('exist');
    },

    logout() {
        // нажимаем 'Выйти'
        cy.get('button.button.secondary')
          .click();
        // должен появиться вопрос-подтверждение выхода
        cy.get(logout_question)
          .should('exist');
        // 'подтверждаем' выход
        cy.get('div.logout-buttons > button.cancel-button')
          .click();
        // проверяем, что пользователь разлогинился
        cy.get(user_info)
          .should('not.exist');
        cy.get(logout_question)
          .should('not.exist');
    },

    // авторизация с пустыми обязательными полями
    login_empty_mandatory_fields() {

        // жмем кнопку 'Войти' на странице авторизации
        cy.get(entry_button)
          .click();
        cy.get(login_input)
          .type('test')
          .should('have.value', 'test');
        // жмем кнопку 'Войти' на странице авторизации
        cy.get(login_confirm)
          .click();
        // проверяем, что окно авторизации все еще активно
        cy.get(auth_window)
          .should('exist');
        cy.screenshot();
        // очищаем поле ввода логина
        cy.get(login_input)
            .clear();
        cy.get(password_input)
            .clear();
    },

    // невалидная попытка авторизации
    login_nonexistent_user() {
        // вводим невалидные логин/пароль
        cy.get(login_input)
          .type('nonexistent@test.com')
          .should('have.value', 'nonexistent@test.com');
        cy.get(password_input)
          .type('wrong_password');
        // нажимаем кнопку 'Войти' в меню авторизации
        cy.get(login_confirm)
          .click();
        // проверяем ошибку и ее текст
        cy.get(notification)
          .should('visible')
          .and('have.text', '«пользователь» не существует.');
        cy.screenshot();
        // проверяем, что пользователь все еще не залогинен
        cy.get(user_info)
          .should('not.exist');
        cy.get(login_input)
            .clear();
        cy.get(password_input)
            .clear();
    },

    login_invalid_password() {

        // вводим логин с неправильным паролем
        cy.get(login_input)
          .type('nogm75@1win.xyz')
          .should('have.value', 'nogm75@1win.xyz');
        cy.get(password_input)
          .type('123456555');
        // нажимаем кнопку 'Войти' в меню авторизации
        cy.get(login_confirm)
          .click();
        // проверяем ошибку и ее текст
        cy.get(notification)
          .should('visible')
          .and('have.text', 'Неверный пароль');
        cy.screenshot();
        // проверяем, что пользователь все еще не залогинен
        cy.get(user_info)
          .should('not.exist');
    }
};
