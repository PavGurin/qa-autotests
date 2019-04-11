describe('Настройки', () => {
    it('adds xpath command', () => {
        expect(cy)
            .property('xpath')
            .to.be.a('function');
    });


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
        // cy.wait(2000)

        cy.get('.user-name.text-with-arrow').trigger('mouseover');

        cy.contains('Настройки').click();
        // cy.wait(1000)

        cy.xpath('(//input[@required="required"])[1]').type('{selectall}{del}').type('cote');


        cy.xpath('//input[@type="password"]').type('123456');

        cy.xpath('//button[contains(.,"Сохранить")]').click();
    });

    it('Exit', () => {
        cy.contains('Выйти').click();
        cy.contains('Да').click();
    });
});
