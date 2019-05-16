import { auth } from '../../../support/desktop/Authorization';
import { baseCom } from '../../../support/desktop/BaseCommands';


describe('Авторизация по email', () => {
    it('C16300 - Авторизация по email', () => {
      cy.visit('/');

      auth.login();
      baseCom.logout();
  });

    it('C18769 - Авторизация по email, Невалидные данные', () => {
      cy.visit('/');

      auth.login_invalid();
      baseCom.logout();
    });
});
