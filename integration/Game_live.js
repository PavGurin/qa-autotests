describe('Лайв-Игры', () => {
    it('Clear Cookies', () => {
        cy.clearCookies();
    });

    it('Open home page', () => {
        cy.clearCookies();
        cy.visit('/');
    });

    it('Login in home page', () => {
        cy.contains('Войти').click();

        cy.get('input[name=login]')
            .type('testfor1win1@gmail.com')
            .should('have.value', 'testfor1win1@gmail.com');

        cy.get('input[name=password]')
            .type('123456');

        cy.contains('Войти').click();
        // cy.wait(3000)
    });

    it('Play Game', () => {
        cy.contains('Live games').click();

        cy.get('.casino-games-list__wrapper')
            .find('.scroller__item')
            .first()
            .trigger('mouseover');
    });

    it('Play Game', () => {
        cy.contains('Казино').click();

        cy.xpath('//div[@class="game-name"][contains(.,"Jack And The Beanstalk")]');
    });


    it('Exit', () => {
        cy.contains('Выйти').click();
        cy.contains('Да').click();
    });
});
