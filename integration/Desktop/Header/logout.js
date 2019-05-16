describe('Logout', () => {
    const user_info = 'div.user-info';

    it('C18768 Выход', () => {
        cy.visit('/');
        // нажимаем кнопку 'Войти'
        cy.get('button.button.secondary')
            .click();
        // вводим логин/пароль
        cy.get('input[name=login]')
            .type('nogm75@1win.xyz')
            .should('have.value', 'nogm75@1win.xyz');
        cy.get('input[name=password]')
            .type('123456');
        // нажимаем кнопку 'Войти'
        cy.get('button[type=submit]')
            .click();
        // проверяем, что пользователь залогинился
        cy.get(user_info)
            .should('exist');
        // нажимаем 'Выйти'
        cy.get('button.button.secondary')
            .click();
        // должен появиться вопрос-подтверждение выхода
        cy.get('.logout-question')
            .should('exist');
        // 'подтверждаем' выход
        cy.get('div.logout-buttons > button.cancel-button')
            .click();
        // проверяем, что пользователь разлогинился
        cy.get(user_info)
            .should('not.exist');
    });
});
