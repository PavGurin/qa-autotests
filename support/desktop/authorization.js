/**
 Методы авторизации
 **/

const user_info = 'div.user-info';
const entry_button = 'button.button.secondary';
const login_input = 'input[name=login]';
const password_input = 'input[name=password]';
const logout_confirm = '.logout-question';

export const auth = {

    // успешная авторизация
    login() {
        // cy.get('div.level-right> div>  button.header-button')
        // cy.get("div.level-right> div>  button.header-button").should(($b) => {
        //     expect($b).to.have.length(2)
        // })
        //   .then(cy.get(entry_button)).click();


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
        cy.get('button[type=submit]')
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
        cy.get(logout_confirm)
          .should('exist');
        // 'подтверждаем' выход
        cy.get('div.logout-buttons > button.cancel-button')
          .click();
        // проверяем, что пользователь разлогинился
        cy.get(user_info)
          .should('not.exist');
        cy.get(logout_confirm)
          .should('not.exist');
    },

    // невалидная попытка авторизации
    login_invalid() {
        // нажимаем кнопку 'Войти'
        cy.get(entry_button)
          .click();
        // вводим невалидные логин/пароль
        cy.get('input[name=login]')
          .type('nogm7555@1win.xyz')
          .should('have.value', 'nogm7555@1win.xyz');
        cy.get('input[name=password]')
          .type('123456555');
        // нажимаем кнопку 'Войти' в меню авторизации
        cy.get('button[type=submit]')
          .click();
        // проверяем, что пользователь все еще не залогинен
        cy.get(user_info)
          .should('not.exist');
    }
};
