import {bets} from '@support/desktop/Bets';
import {auth} from '@support/desktop/Authorization';

describe('Ставки', () => {

    it('C439785 - добавление 2ух купонов по одному матчу - сделать ставку ', () => {
        auth.login();
        bets.two_bets_in_one_match_series();
    });
    it('C439786  - добавить 2 купона по разным матчам - сделать ставку', () => {
        auth.login();
        bets.two_bets_in_different_match_series();
    });
    it('C439787 - добавить 3 купона - сделать ставку', () => {
        auth.login();
        bets.three_bets_in_different_match_series();
    });
    it('C439788 - удалить 1 из купонов', () => {
        auth.login();
        bets.three_bets_in_different_match_without_ok_series();
        bets.close_one_coupons();
        bets.assert_close_one_coupons();
    });
    it('C439789 - удалить все купоны', () => {
        auth.login();
        bets.three_bets_in_different_match_without_ok_series();
        bets.close_coupons();
        bets.assert_all_close_coupons();
    });
});