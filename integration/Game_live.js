describe('Лайв-Игры', () => {
    it('Login in home page', () => {
        cy.visit('/');
        cy.contains('Войти').click();

        cy.get('input[name=login]')
            .type('testfor1win1@gmail.com')
            .should('have.value', 'testfor1win1@gmail.com');

        cy.get('input[name=password]')
            .type('123456');

        cy.contains('Войти').click();
    });

    it('Play Game', () => {
        cy.contains('Live games').click();

        cy.get('.casino-games-list__wrapper')
            .find('.scroller__item')
            .first()
            .trigger('mouseover');
    });

    it('Exit', () => {
        cy.contains('Выйти').click();
        cy.contains('Да').click();
    });
});
