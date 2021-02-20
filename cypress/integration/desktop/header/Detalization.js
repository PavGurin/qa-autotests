import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bets } from "@support/desktop/Bets";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Детализация", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
    cy.wait(2000);
  });
  it("C1506261 - Депозиты - Перевод", function () {
    auth.login2();
    cy.wait(2000);
    prof.withdrawal("Детализация");
    prof.assert_transfer_detail();
  });
  it("C1506263 - Выводы - Банковская карта", function () {
    auth.login2();
    cy.wait(2000);
    prof.withdrawal("Детализация");
    prof.button_withdrawal_detail();
    prof.assert_withdrawal_detail();
  });
  it("C1506264 - Ставки - Ординар", function () {
    auth.login2();
    cy.wait(2000);
    prof.withdrawal("Детализация");
    prof.button_bets_detail();
    prof.assert_bets_detail();
  });
  it("C1506265 - Новая ставка - Ординар", function () {
    auth.login();
    cy.wait(2000);
    basicCom.live_button();
    basicCom.switch_language("en");
    bets.bet_main_page_en();
    prof.withdrawal("Detailing");
    cy.wait(1000);
    prof.button_bets_detail();
    const todaysDate = Cypress.moment().format("MMMM D, YYYY | hh:mm A");

    cy.wait(1000);

    cy.log(todaysDate);
    cy.get(":nth-child(1) > .DetailingItem__right > .DetailingItem__date")
            .should("contain", todaysDate);
  });
  it.skip("C1506266 - Казино", function () {
    auth.login2();
    cy.wait(2000);
    prof.withdrawal("Детализация");
    prof.button_casino_detail();
  });
  it.skip("C1506267 - Кейсы", function () {
    auth.login2();
    cy.wait(2000);
    prof.withdrawal("Детализация");
    prof.button_case_detail();
  });
});

