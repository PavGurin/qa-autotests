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
  afterEach(function () {
    cy.get(".modal-container__header button").click();
  });
  it("Deposits - Transfer", function () {
    prof.withdrawal("Детализация");
    prof.assert_transfer_detail();
  });
  it("Withdrawals - Bank card", function () {
    prof.withdrawal("Детализация");
    prof.button_withdrawal_detail();
    prof.assert_withdrawal_detail();
  });
  it("Bets - Single", function () {
    prof.withdrawal("Детализация");
    prof.button_bets_detail();
    prof.assert_bets_detail();
  });
  it("New bet - Single", function () {
    auth.logout();
    cy.wait(1000);
    basicCom.live_button();
    cy.wait(1000);
    auth.login2();
    bets.bet_main_page();
    const todaysDate = Cypress.moment().format("D MMMM YYYY г. | hh:mm");

    cy.log(todaysDate);
    prof.withdrawal("Детализация");
    cy.wait(1000);
    prof.button_bets_detail();
    cy.wait(1000);
    cy.get(":nth-child(1) > .DetailingItem__right > .DetailingItem__date")
        .should("contain", todaysDate);
  });
});
