import { basicCom } from "@support/desktop/BasicCommands";
import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";

describe("Series", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
    basicCom.live_button();
    cy.wait(1000);
  });
  it("C740717 - Добавление двух купонов по одному матчу - сделать ставку", () => {
    bets.bets_series_in_one_match_for_mobile();
  });
  it("С740718 - Добавление двух купонов по разным матчам - сделать ставку", () => {
    bets.two_bets_series_in_different_match_for_mobile();
  });
});
