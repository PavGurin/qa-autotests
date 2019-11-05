import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
import {bets} from "@support/desktop/Bets";
import {basicCom} from "@support/desktop/BasicCommands";
describe('Детализация', () => {
    it('C1506261 - Депозиты - Перевод', function () {
        auth.login2();
        prof.withdrawal('Детализация');
        prof.assert_transfer_detail();
     });
    it('C1506262 - Депозиты - c мобильного Теле2 ', function () {
        auth.login2();
        prof.withdrawal('Детализация');
        prof.assert_transfer_detail2();
    });
    it('C1506263 - Выводы - Банковская карта', function () {
        auth.login2();
        prof.withdrawal('Детализация');
        prof.button_withdrawal_detail();
        prof.assert_withdrawal_detail();
    });
    it('C1506264 - Ставки - Ординар', function () {
        auth.login2();
        prof.withdrawal('Детализация');
        prof.button_bets_detail();
        prof.assert_bets_detail();
    });
    it('C1506265 - Новая ставка - Ординар', function () {
        auth.login();
        basicCom.live_button();
        basicCom.switch_language();
        bets.bet_main_page(10);
        prof.withdrawal('Detailing');
       prof.button_bets_detail();
        cy.wait(1000);
        const todaysDate=Cypress.moment().format('MMMM D, YYYY | hh:mm A')
        console.log(todaysDate);
        cy.get(':nth-child(1) > .detailing-item__right > .detailing-item__date')
            .should('contain',todaysDate);
    });
    it('C1506266 - Казино', function () {
        auth.login2();
        prof.withdrawal('Детализация');
        prof.button_casino_detail();
    });
    it('C1506267 - Кейсы', function () {
        auth.login2();
        prof.withdrawal('Детализация');
        prof.button_case_detail();
    });
});