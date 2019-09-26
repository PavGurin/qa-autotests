import {auth} from "@support/desktop/Authorization";
import {navReg} from "@support/desktop/NavReg";
import {bank} from "@support/desktop/Banking";
import {prof} from "@support/desktop/Profile";

describe('Banking Desktop', () => {
    it('C636287 - вывод средств на карту', function() {
        auth.login();
        prof.withdrawal('Вывод средств');
        prof.credit_card_number();
        prof.withdrawal_number_();
        prof.withdrawal_button();
        bank.assert_witdrawal();
    });
    it('C636282 - пополнение cо счета мегафона', function() {
        auth.login();
        prof.deposit();
        prof.deposit_change();
        prof.deposit_change_switch('С мобильного Мегафон');
        prof.deposit_number();
        prof.deposit_number_phone();
    });
    it('C636655 - перевод', function() {
        auth.login_for_mobile_mail();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Перевод')
            .click();
        bank.transfer_for_mobile('1wintesting2@mail.ru');
        bank.check_notification_valid_transfer_for_mobile();
        auth.logout_for_mobile2();
        auth.login_for_mobile_mail2();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Перевод')
            .click();
        bank.transfer_for_mobile('1wintesting@mail.ru');
        bank.check_notification_valid_transfer_for_mobile();
    });
});