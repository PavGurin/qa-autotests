import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Казино", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
    auth.login_for_mobile2();
    cy.wait(1000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Search game in Casino", function () {
    basicCom.casino_button_for_mobile();
    basicCom.casino_search_mobile("ice Wolf");
    basicCom.assert_casino_for_mobile();
    cy.wait(1000);
    basicCom.assert2_casino_for_mobile();
  });
});
