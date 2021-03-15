import { basicCom } from "@support/desktop/BasicCommands";
import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";

describe("Express", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
    cy.wait(1000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
    basicCom.live_button();
    cy.wait(1000);
  });
  it("Add 2 coupons for different matches - make a bet", () => {
    bets.bet_different_express_for_mobile();
  });
  it("2 coupons for 1 match - Express is unavailable", () => {
    bets.two_bets_series_in_one_match_for_mobile();
  });
});
