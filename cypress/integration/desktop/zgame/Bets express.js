import {bets} from '@support/desktop/Bets';
import {auth} from '@support/desktop/Authorization';

describe('Ставки', () => {

    it('C459478 - добавление 2ух купонов по разным матчам - сделать ставку ', () => {
        auth.login();
        // делает ставку на главной странице
        bets.two_bets_in_different_match_express();
    });
    // данный кейс сложно реализовать на фронте
    it('C459479  - экспресс ставка с дополнительным бонусом', () => {
        auth.login();
    });
    // данный кейс пока не реализовать
    it('C459480 - Экспресс без бонуса, но с добавленными более 5 купонов', () => {
        auth.login();
        bets.three_bets_in_different_match_series();
    });
    it('C459481 - Невозможность выбора экспресс при наличии купонов по одному матчу', () => {
        auth.login();
        bets.two_bets_in_one_match_express();
        bets.assert_express_disabled();
    });
    it('C459482 - Невозможность выбора экспресс при наличии одного купона', () => {
        auth.login();
        bets.bet_main_page_without_click_ok();
        bets.assert_express_disabled();
    });
});