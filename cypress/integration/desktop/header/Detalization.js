import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bets } from "@support/desktop/Bets";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Детализация", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.loginNew();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Deposits - Transfer", function () {
    prof.withdrawal("Детализация");
    prof.assert_transfer_detail();
  });
  it("Withdrawals - Bank card", function () {
    prof.button_withdrawal_detail();
    prof.assert_withdrawal_detail();
  });
  it("Bets - Single", function () {
    prof.button_bets_detail();
    prof.assert_bets_detail();
  });
  it("New bet - Single", function () {
    cy.get(".modal-container__header__row__account-number > .button > .icon-wrap")
    .click();
    basicCom.live_button();
    cy.wait(1000);
    basicCom.switch_language("en");
    cy.wait(5000);
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(5000);
    auth.login2();
    bets.bet_main_page_en();
    prof.withdrawal("Detailing");
    cy.wait(1000);
    prof.button_bets_detail_en();
    const todaysDate = Cypress.moment().format("MMMM D, YYYY | hh:mm A");

    cy.wait(1000);

    cy.log(todaysDate);
    cy.get(":nth-child(1) > .DetailingItem__right > .DetailingItem__date")
            .should("contain", todaysDate);
  });
});

