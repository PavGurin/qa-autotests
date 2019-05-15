import { gameStav } from '../../../support/desktop/gameStav';
import { login } from '../../../support/desktop/login';
import { basecom } from '../../../support/desktop/BaseCommands';


describe('Stavka', () => {
    it('C18766 - Ставка валид', () => {
        cy.visit('/');

//        cy.wait(5000);

        login.log_ins();

        gameStav.click_stavka_valid();

//        cy.wait(5000);

        basecom.logout();
    });

    it('C18767 - Ставка с "Сумма ставки" = 0', () => {
        cy.visit('/');

//        cy.wait(5000);

        login.log_ins();

        gameStav.click_stavka_Ne_val();

//        cy.wait(5000);

        basecom.logout();
    });
});
