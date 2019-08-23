import {bets} from '@support/desktop/Bets';
import {auth} from '@support/desktop/Authorization';

describe('Ставки', () => {

    it.skip('C422723 - добавить 1 купон - сделать ставку', () => {
        auth.login();
        bets.bet_main_page();
    });
    it.skip('C422724  - добавить 2 купона по одному матчу - сделать ставку', () => {
        auth.login();
        bets.bets_main_page_two_bets_in_one_match();
    });
    it.skip('C422725 - добавить 2 купона по разным матчам  - сделать ставку', () => {
        auth.login();
        bets.bets_main_page_two_bets_in_different_match();
    });
    it.skip('C422726 - удалить 1 купон', () => {
        auth.login();
        bets.bet_main_page_without_click_ok();
        bets.close_coupons();
        bets.assert_close_coupons();
    });
    it('C422727 - удалить все купоны', () => {
        auth.login();
        bets.two_bets_in_different_match_without_ok();
        bets.close_coupons();
        bets.assert_all_close_coupons();
    });
});