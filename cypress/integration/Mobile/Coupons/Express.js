import { basicCom } from "@support/desktop/BasicCommands";
import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";

describe("Экспресс", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
    cy.wait(1000);
    basicCom.live_button();
    cy.wait(1000);
  });
  it("C740710 - Добавление 2ух купонов по разным матчам - сделать ставку", () => {
    bets.bet_different_express_for_mobile();
  });
  it("C740713 - Невозможность выбора экспресс при наличии купонов по одному матчу ", () => {
    bets.two_bets_series_in_one_match_for_mobile();
  });
});
