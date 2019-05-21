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

export const auth = {

    // успешная авторизация
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

    // logout
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

    // невалидная попытка авторизации
    login_nonexistent_user() {
        // нажимаем кнопку 'Войти'
        cy.get(entry_button)
          .click();
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
        cy.get('.notification-content')
          .should('visible')
          .and('have.text', '«пользователь» не существует.');
        // проверяем, что пользователь все еще не залогинен
        cy.get(user_info)
          .should('not.exist');
        // закрываем окно авторизации
        cy.get('i.fa-times')
          .click();
    },

    login_invalid_password() {
        // нажимаем кнопку 'Войти' со стартовой страницы
        cy.get(entry_button)
          .click();
        // вводим логин с неправильным паролем
        cy.get('input[name=login]')
          .type('nogm75@1win.xyz')
          .should('have.value', 'nogm75@1win.xyz');
        cy.get('input[name=password]')
          .type('123456555');
        // нажимаем кнопку 'Войти' в меню авторизации
        cy.get(login_confirm)
          .click();
        // проверяем ошибку и ее текст
        cy.get('.notification-content')
          .should('visible')
          .and('have.text', 'Неверный пароль');
        // проверяем, что пользователь все еще не залогинен
        cy.get(user_info)
          .should('not.exist');
        // закрываем окно авторизации
        cy.get('i.fa-times')
          .click();
    },

    login_empty_mandatory_fields() {
        // жмем кнопку 'Войти' на странице авторизации
        cy.get(entry_button)
          .click();
        // проверяем, что окно авторизации все еще активно
        cy.get(auth_window)
          .should('exist');
        cy.get(login_input)
          .type('test')
          .should('have.value', 'test');
        // жмем кнопку 'Войти' на странице авторизации
        cy.get(login_confirm)
          .click();
        // проверяем, что окно авторизации все еще активно
        cy.get(auth_window)
          .should('exist');
        // закрываем окно авторизации
        cy.get('i.fa-times')
          .click();
    }
};
