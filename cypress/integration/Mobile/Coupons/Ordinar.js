import {basicCom} from "@support/desktop/BasicCommands";
import {bets} from "@support/desktop/Bets";
import {auth} from "@support/desktop/Authorization";

describe('Ординар', () => {
    beforeEach(function () {
        basicCom.switch_to_mobile();
        cy.viewport(375, 812);
    });
    it('C740703 - Добавление одного купона - сделать ставку', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.bet_ordinar_for_mobile();
    });
    it.only('C740704 - Добавление двух купонов по одному матчу - сделать ставку', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.bet_two_ordinar_for_mobile();
    });
    it('C740705 - Добавление двух купонов по разным матчам - сделать ставку', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.bet_different_ordinar_for_mobile();
    });
    it('C740725 - Минимальная сумма ставки 10 руб', () => {
        auth.login_for_mobile();
        basicCom.live_button_for_mobile();
        bets.bet_minimum10_rub_for_mobile();
    });
    it('C740706 - Удаление одного купона ', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.bet_coupons_delete_for_mobile();
    });
    it('C740707 - Удаление всех купонов', () => {
        auth.login_for_mobile2();
        basicCom.live_button_for_mobile();
        bets.bet_ordinar_for_mobile();
    });
});