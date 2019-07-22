/**
 Методы авторизации
 **/
const button_registration = 'div:nth-child(2) > div.register-adv > span.register-adv__link';
const user_info = 'div.user-info';
const entry_button = 'button.button.secondary';
const login_input = 'input[name=login]';
const password_input = 'input[name=password]';
const login_confirm = '.modal-button';
const auth_window = 'div.modal-container';
const logout_question = '.logout-question';
const notification = '.notification-content';
const forget_button = '.field > .button > span';
const email_forget_send = '.row > .button';
const code_operation = ':nth-child(2) > .control > .input-wrapper > .input';
const new_password =  ':nth-child(3) > .control > .input-wrapper > .input';
const new_password_repeat =':nth-child(4) > .control > .input-wrapper > .input';
export const auth = {
    // Logout
    logout() {
        cy.get('.level-item > .green')
            .click();
    },
            // нажимаем кнопку 'Войти' со стартовой страницы
        click_auth() {
            cy.get(entry_button)
                .click();
    },
        // вводим логин/пароль
        login_input() {
        cy.get(login_input)
            .type('where100@mail.ru');
    },   // вводим пароль
         password_input() {
             cy.get(password_input)
                 .type('tk7oqj');
    },   // нажимаем на кнопку "забыли пароль"
         password_forget() {
              cy.get(forget_button)
                 .click();
    },   // кнопка отправить на почту при восстановлении пароля
          password_forget_send() {
              cy.get(email_forget_send)
                 .click();
    },
         // код операции
          code_operation() {
              cy.get(code_operation)
                 .click()
                 .type('12345');
    },
         //Форма для заполнения почты, если забыл пароль
           forget_set_email(email) {
               cy.get('.input-wrapper > .input')
                   .type(email);
    },
         // Вводим новый пароль и повторяем его
           new_password(password) {
               cy.get(new_password)
                   .click()
                    .type(password);
               cy.get(new_password_repeat)
                   .click()
                   .type(password);
    },
    // Кнопка "зарегаться" в модальном окне "вход"
           button_registration() {
               cy.get(button_registration)
                   .click();
    },
    // жмем кнопку 'Войти' на странице авторизации
           login_confirm() {
               cy.get(login_confirm)
                   .click();
    },
    // Проверка модального онка "Установите новый пароль"
    new_password_modal() {
        cy.get('#main-container > div.modal-wrapper > div > div.modal-container__header')
            .should('have.text','Установите новый пароль');
    },
    // невалидная попытка авторизации
    login_nonexistent_user() {
        // нажимаем кнопку 'Войти' со стартовой страницы
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
        cy.get(notification)
            .should('visible')
            .and('have.text', 'Неверный email или пароль');
        cy.screenshot();
        // проверяем, что пользователь все еще не залогинен
        cy.get(user_info)
            .should('not.exist');
        cy.get(login_input)
            .clear();
        cy.get(password_input)
            .clear();
    },
};

