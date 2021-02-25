import { basicCom } from "@support/desktop/BasicCommands";
import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";

describe("Экспресс", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
  });
  it("C740710 - Добавление 2ух купонов по разным матчам - сделать ставку", () => {
    auth.login_for_mobile2();
    // basicCom.live_button_for_mobile()
    bets.bet_different_express_for_mobile();
  });
  it.skip("C740712 - Экспресс без бонуса, но с добавленными более 5 купонов", () => {
    auth.login_for_mobile2();
    // basicCom.live_button_for_mobile()
    bets.bet_different_ordinar_for_mobile();
  });
  it("C740713 - Невозможность выбора экспресс при наличии купонов по одному матчу ", () => {
    auth.login_for_mobile2();
    // basicCom.live_button_for_mobile()
    bets.two_bets_series_in_one_match_for_mobile();

  });
  it("C740714 - Невозможность выбора экспресс при наличии одного купона ", () => {
    auth.login_for_mobile2();
    // basicCom.live_button_for_mobile()
    bets.one_bet_series_in_one_match_for_mobile();
  });
  it.skip("C740724 - экспресс с несколькими купонами по одному матчу и купоном с другого матча", () => {
    auth.login_for_mobile2();
    // basicCom.live_button_for_mobile()
    bets.bet_ordinar_for_mobile();
  });
});
