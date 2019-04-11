describe('Логин тест', () => {
    it('Clear Cookies', () => {
        cy.clearCookies();
    });


    it('Login in home page', () => {
        cy.clearCookies();
        cy.visit('/');
        cy.contains('Войти').click();
        cy.get('input[name=login]').type('testfor1win1@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.contains('Войти').click();
        // cy.wait(5000)
        cy.contains('cote');
        cy.screenshot();
        // cy.wait(1000)
    });

    it('Exit', () => {
        cy.contains('Выйти').click();
        cy.contains('Да').click();
    });
});
