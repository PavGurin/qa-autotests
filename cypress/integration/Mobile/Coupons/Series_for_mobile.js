import {basicCom} from "@support/desktop/BasicCommands";
import {bets} from "@support/desktop/Bets";
import {auth} from "@support/desktop/Authorization";

describe('Экспресс', () => {
    beforeEach(function () {
        basicCom.switch_to_mobile();
        cy.viewport(375, 812);
    });
    it('C439785- Добавление двух купонов по одному матчу - сделать ставку', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.two_bets_series_in_one_match_for_mobile();
    });
    it('C439786- Добавление двух купонов по разным матчам - сделать ставку', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.two_bets_series_in_different_match_for_mobile();
    });
});