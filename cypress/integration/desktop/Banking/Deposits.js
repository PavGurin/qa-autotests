import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
import {bank} from "@support/desktop/Banking";

describe('Deposit', () => {
    it('C1086820 - RUB - пополнение cо счета мегафона', function() {
        auth.login();
        prof.deposit();
        prof.deposit_change();
        prof.deposit_change_switch('С мобильного Мегафон');
        prof.deposit_number();
        prof.deposit_number_phone();
        prof.deposit_button();
        bank.assert_deposit_desktop();
    });
    it('C1086825 - USD - пополнение c банковской карты', function() {
        auth.login();
        prof.deposit();
        prof.deposit_change();
        cy.contains('USD')
            .click();
        prof.credit_card_deposit_number();
        prof.withdrawal_number_EUR();
        prof.deposit_assert_visible();

    });
    it('C1086835 - EUR - пополнение c банковской карты', function() {
        auth.login();
        prof.deposit();
        prof.deposit_change();
        cy.contains('EUR')
            .click();
        prof.credit_card_deposit_number();
        prof.withdrawal_number_EUR();
        prof.deposit_assert_visible();
    });
});