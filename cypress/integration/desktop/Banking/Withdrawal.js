import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
import {bank} from "@support/desktop/Banking";

describe('Withdrawal', () => {
    it('C1086785 - RUB - вывод средств на карту ', function() {
        auth.login();
        prof.withdrawal('Вывод средств');
        prof.credit_card_number();
        prof.withdrawal_number_();
        prof.withdrawal_button();
        bank.assert_witdrawal();
    });
    it('C1086805- EUR - вывод средств на карту ', function() {
        auth.login();
        prof.withdrawal('Вывод средств');
        cy.contains('EUR')
            .click();
        prof.credit_card_number();
        prof.withdrawal_number_EUR();
        prof.withdrawal_button();
        bank.assert_witdrawal();
    });
    it('C1086795- USD - вывод средств на карту ', function() {
        auth.login();
        prof.withdrawal('Вывод средств');
        cy.contains('USD')
            .click();
        prof.credit_card_number();
        prof.withdrawal_number_EUR();
        prof.withdrawal_button();
        bank.assert_witdrawal();
    });
});