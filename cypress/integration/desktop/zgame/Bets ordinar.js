import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Ставки - Ординар", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.login();
    basicCom.live_button();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("C422723 - добавить 1 купон - сделать ставку", () => {
    bets.bet_main_page(10);
  });
  it("C422724  - добавить 2 купона по одному матчу - сделать ставку", () => {
    bets.bets_main_page_two_bets_in_one_match();
  });
  it("C422725 - добавить 2 купона по разным матчам  - сделать ставку", () => {
    bets.bets_main_page_two_bets_in_different_match();
  });
  it("C422726 - удалить 1 купон", () => {
    bets.bet_main_page_without_click_ok();
    bets.close_one_coupons();
    bets.assert_close_coupons();
  });
  it("Ставка с \"Сумма ставки\" = 0", () => {
    // делает нулевую ставку
    bets.bet_live_zero();
  });
});
