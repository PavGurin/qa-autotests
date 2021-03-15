import { basicCom } from "@support/desktop/BasicCommands";
import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";

describe("Ordinary", () => {
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
  it("ordinary bet", () => {
    bets.bet_ordinar_for_mobile();
  });
  it("2 coupons for one match", () => {
    bets.bet_two_ordinar_for_mobile();
  });
  it("2 coupons for different matches ", () => {
    bets.bet_different_ordinar_for_mobile();
  });
  it("MinSum 10 rub", () => {
    bets.bet_minimum10_rub_for_mobile();
  });
  it("remove coupons ", () => {
    bets.bet_coupons_delete_for_mobile();
  });
});
