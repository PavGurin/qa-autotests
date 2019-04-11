describe('Настройки', () => {
    it('Login in home page', () => {
        cy.visit('/');
        cy.contains('Войти').click();
        cy.get('input[name=login]').type('testfor1win1@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.contains('Войти').click();

        cy.get('.user-name.text-with-arrow').trigger('mouseover');

        cy.contains('Настройки').click();

        cy.xpath('(//input[@required="required"])[1]').type('{selectall}{del}').type('cote');


        cy.xpath('//input[@type="password"]').type('123456');

        cy.xpath('//button[contains(.,"Сохранить")]').click();
    });

    it('Exit', () => {
        cy.contains('Выйти').click();
        cy.contains('Да').click();
    });
});
