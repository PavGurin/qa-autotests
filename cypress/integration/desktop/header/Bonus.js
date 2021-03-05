import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Bonus", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.login3();
    cy.wait(2000);
  });

  it(" - Бонус", function () {
    basicCom.bonus_main_page();
  });
});
