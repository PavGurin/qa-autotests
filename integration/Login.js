describe('Логин тест', () => {
    it('Login in home page', () => {
        cy.visit('/');
        cy.contains('Войти').click();
        cy.get('input[name=login]').type('testfor1win1@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.contains('Войти').click();
        cy.contains('cote');
        cy.screenshot();
    });

    it('Exit', () => {
        cy.contains('Выйти').click();
        cy.contains('Да').click();
    });
});
