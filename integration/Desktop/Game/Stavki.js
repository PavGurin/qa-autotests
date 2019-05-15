import { gameStav } from '../../../support/desktop/gameStav';
import { login } from '../../../support/desktop/login';
import { navReg } from '../../../support/desktop/navReg';


describe('Stavka', () => {

  it('Ставка валид', () => {
      cy.visit('/');

      cy.wait(5000)

      login.log_ins();

      gameStav.click_stavka_valid();

      cy.wait(5000)

      navReg.logout();

    });

    it('Ставка ne валид',()=> {

      cy.visit('/');

      cy.wait(5000)

      login.log_ins();

      gameStav.click_stavka_Ne_val();

      cy.wait(5000)

      navReg.logout();


    });
});
