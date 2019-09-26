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
        prof.deposit_button();
        bank.assert_deposit_desktop();
    });
    it('C27095 - перевод', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_deposit();
        prof.transfer_button_click();
        bank.assert_transfer();
        navReg.close_modal_windows();
        auth.logout();
        auth.login_mail2();
        prof.withdrawal('Перевод');
        prof.transfer_mail('1wintesting@mail.ru');
        prof.transfer_deposit();
        prof.transfer_button_click();
        bank.assert_transfer();
        navReg.close_modal_windows();


    });
});