import { gameStav } from '../../../support/desktop/gameStav';
import { auth } from '../../../support/desktop/Authorization';
import { baseCom } from '../../../support/desktop/BaseCommands';


describe('Stavka', () => {
    it('C18766 - Ставка валид', () => {
        cy.visit('/');

        // cy.wait(5000);

        auth.login();

        gameStav.click_stavka_valid();

        // cy.wait(5000);

        baseCom.logout();
    });

    it('C18767 - Ставка с "Сумма ставки" = 0', () => {
        cy.visit('/');
        // cy.wait(5000);

        auth.login();

        gameStav.click_stavka_Ne_val();

        // cy.wait(5000);

        baseCom.logout();
    });
});
