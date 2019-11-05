import {auth} from "@support/desktop/Authorization";

import {basicCom} from "@support/desktop/BasicCommands";
import {navReg} from "@support/desktop/NavReg";
import {bank} from "@support/desktop/Banking";
describe('Banking', () => {
    beforeEach(function () {
        basicCom.switch_to_mobile();
        cy.viewport(375, 812);
    });
    it('C636625 - вывод средств на карту', function() {
        auth.login_for_mobile2();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Вывести')
            .click();
        bank.withdrawal_visa();
        bank.assert_withdrawal_visa();
    });
    it('C636625 - вывод средств на Qiwi', function() {
        auth.login_for_mobile2();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Вывести')
            .click();
        bank.withdrawal_Qiwi();
        bank.assert_withdrawal_visa();
    });
    it('C636650 - пополнение cо счета мегафона', function() {
        auth.login_for_mobile2();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Пополнить')
            .click();
        bank.deposit_megafon();
        bank.assert_deposit_megafon();
    });
    it('C636655 - перевод', function() {
        auth.login_for_mobile_mail();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Перевести')
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
    it('C636660 - Перевод на незарегистрированный mail', function() {
        auth.login_for_mobile_mail();
        navReg.click_settings_main_page_for_mobile();
        cy.contains('Перевести')
            .click();
        bank.transfer_for_mobile('sdbghfhftras@mail.ru');
        bank.check_notification_invalid_transfer_for_mobile();
    });
});