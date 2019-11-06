import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
import {bank} from "@support/desktop/Banking";
import {navReg} from "@support/desktop/NavReg";
import {req} from "@support/desktop/Request";

describe('Withdrawal', () => {
    it.skip('C1086851 - RUB - Перевод', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_mail('1wintest123@ahem.email');
        prof.transfer_deposit('20');
        prof.transfer_button_click();
        req.code_transfer();
        prof.transfer_apply_click();
        bank.assert_transfer();
        navReg.close_modal_windows();
        auth.logout();
        auth.login_mail2();
        prof.withdrawal('Перевод');
        prof.transfer_mail('1wintesttransfer@ahem.email');
        prof.transfer_deposit('20');
        prof.transfer_button_click();
        req.code_transfer2();
        prof.transfer_apply_click();
        bank.assert_transfer();
        navReg.close_modal_windows();
    });
    it('C1086852 - RUB - Сумма меньше минимальной ', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_deposit('19');
        prof.transfer_assert_disabled();
    });
    it('C1086856 - RUB - Перевод не незарегистрированный e-mail ', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_mail('wuqidichbfbdmmc');
        prof.transfer_deposit('20');
        prof.transfer_button_click();
        bank.wrong_transfer();
    });
    it('C1086853 - RUB - Оставить поле ввода e-mail пустым  ', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_deposit('20');
        prof.transfer_button_click();
        bank.wrong_transfer();
    });
    it('C1086854 - RUB - Оставить поле суммы пустым ', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_assert_disabled();
    });
    it('C1086855 - RUB - Оставить обязательные поля пустыми ', function() {
        auth.login_mail();
        prof.withdrawal('Перевод');
        prof.transfer_assert_disabled();
    });
    it('C1086859 - USD - Перевод', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('USD')
            .click();
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_deposit('0.1');
        prof.transfer_button_click();
        bank.assert_transfer2();

    });
    it('C1086860 - USD - Сумма меньше минимальной ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('USD')
            .click();
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_deposit('0.05');
        prof.transfer_assert_disabled();
    });
    it('C1086864 - USD - Перевод не незарегистрированный e-mail ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('USD')
            .click();
        prof.transfer_mail('wuqidichbfbdmmc');
        prof.transfer_deposit('0.1');
        prof.transfer_button_click();
        bank.wrong_transfer();
    });
    it('C1086861 - USD - Оставить поле ввода e-mail пустым  ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('USD')
            .click();
        prof.transfer_deposit('0.1');
        prof.transfer_button_click();
        bank.wrong_transfer();
    });
    it('C1086862 - USD - Оставить поле суммы пустым ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('USD')
            .click();
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_assert_disabled();
    });
    it('C1086863 - USD - Оставить обязательные поля пустыми ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('USD')
            .click();
        prof.transfer_assert_disabled();
    });
    it('C1086865 - EUR - Перевод', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('EUR')
            .click();
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_deposit('0.1');
        prof.transfer_button_click();
        bank.assert_transfer2();
    });
    it('C1086866 - EUR - Сумма меньше минимальной ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('EUR')
            .click();
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_deposit('0.05');
        prof.transfer_assert_disabled();
    });
    it('C1086870 - EUR - Перевод не незарегистрированный e-mail ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('EUR')
            .click();
        prof.transfer_mail('wuqidichbfbdmmc');
        prof.transfer_deposit('0.1');
        prof.transfer_button_click();
        bank.wrong_transfer();
    });
    it('C1086867 - EUR - Оставить поле ввода e-mail пустым  ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('EUR')
            .click();
        prof.transfer_deposit('0.1');
        prof.transfer_button_click();
        bank.wrong_transfer();
    });
    it('C1086868- EUR - Оставить поле суммы пустым ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('EUR')
            .click();
        prof.transfer_mail('1wintesting2@mail.ru');
        prof.transfer_assert_disabled();
    });
    it('C1086869 - EUR - Оставить обязательные поля пустыми ', function() {
        auth.login();
        prof.withdrawal('Перевод');
        cy.contains('EUR')
            .click();
        prof.transfer_assert_disabled();
    });
});