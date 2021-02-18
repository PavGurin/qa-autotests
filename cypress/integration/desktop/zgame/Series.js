import { bets } from "@support/desktop/Bets";
import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Ставки", () => {

  it("C439785 - добавление 2ух купонов по одному матчу - сделать ставку ", () => {
    auth.login();
    basicCom.live_button();
    bets.two_bets_in_one_match_series();
  });
  it("C439786  - добавить 2 купона по разным матчам - сделать ставку", () => {
    auth.login();
    basicCom.live_button();
    bets.two_bets_in_different_match_series();
  });
  it("C439787 - добавить 3 купона - сделать ставку", () => {
    auth.login();
    basicCom.live_button();
    bets.three_bets_in_different_match_series();
  });
});
