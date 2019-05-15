import { login } from '../../../support/desktop/login';
import { basecom } from '../../../support/desktop/BaseCommands';


describe('Stavka', () => {
    it('C16300 - Авторизация по email', () => {
      cy.visit('/');

      login.log_ins();
      basecom.logout();
  });

    it('C16300 - Авторизация по email, Невалидные данные', () => {
      cy.visit('/');

      login.log_ins_nevalid();
      basecom.logout();
    });
});
