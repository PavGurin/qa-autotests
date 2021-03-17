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
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("C459478 - добавление 2ух купонов по разным матчам - сделать ставку ", () => {
    bets.two_bets_in_different_match_express();
  });
  it("C459481 - Невозможность выбора экспресс при наличии купонов по одному матчу", () => {
    bets.two_bets_in_one_match_express();
    bets.assert_express_disabled();
  });
  it("C459482 - Невозможность выбора экспресс при наличии одного купона", () => {
    bets.bet_main_page_without_click_ok();
    bets.assert_express_disabled();
  });
});
