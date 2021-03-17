import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Ставки", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.login();
    basicCom.live_button();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("C439785 - добавление 2ух купонов по одному матчу - сделать ставку ", () => {
    bets.two_bets_in_one_match_series();
  });
  it("C439786  - добавить 2 купона по разным матчам - сделать ставку", () => {
    bets.two_bets_in_different_match_series();
  });
  it("C439787 - добавить 3 купона - сделать ставку", () => {
    bets.three_bets_in_different_match_series();
  });
});
