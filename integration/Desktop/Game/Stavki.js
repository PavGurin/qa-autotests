import { gameStav } from '../../../support/desktop/gameStav';
import { login } from '../../../support/desktop/login';
import { navReg } from '../../../support/desktop/navReg';


describe('Stavka', () => {

  it('Ставка не валид', () => {
      cy.visit('/');

      cy.wait(5000)

      login.log_ins();

      gameStav.click_stavkaval();

      cy.wait(5000)

      navReg.logout();

    });
});
