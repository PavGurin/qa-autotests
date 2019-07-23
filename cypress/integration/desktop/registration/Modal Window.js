import { navReg } from '@support/desktop/NavReg';
import { auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
const modal_login_container = '#main-container > div.modal-wrapper > div > div.modal-container__header';
describe('Modal window', () => {
    it('C27797 - Modal window register', function() {
        navReg.click_register();
        navReg.set_country("Angola");
        cy.get('.add_promocode')
            .click();
        cy.get('.form > .field > .button')
            .click();
        navReg.accept_agreement();
        navReg.registration_form('Соц. сети');
        navReg.set_social_network('ВКонтакте');
        navReg.set_social_network('Одноклассники');
        navReg.set_social_network('Google');
        navReg.add_promocode('test001');
        navReg.registration_form('По e-mail');
        navReg.add_promocode('test001');
        cy.get('.form > .field > .button')
            .click();
        navReg.accept_agreement();
        cy.get('#main-container > div.modal-wrapper > div > div.modal-container__header')
            .should('have.text', 'Регистрация');
        cy.get('.modal-container__header__row > :nth-child(2) > .icon')
            .click();
    });
    it('C27798 - Modal window Authorization', function() {
        auth.click_auth();
        auth.login_input();
        auth.password_input();
        cy.get(modal_login_container)
            .should('have.text','ВходДобро пожаловать в 1WIN' );
        auth.button_registration();
        navReg.close_modal_windows();
    });
    it('C27799 - Modal window forget_password', function() {
        auth.click_auth();
        auth.login_input();
        auth.password_input();
        auth.password_forget();
        auth.forget_set_email('where100@mail.ru');
        auth.password_forget_send();
        //проверить, что кнопка "сменить пароль" недоступна
        cy.get(' div:nth-child(5) > button')
            .should('be.disabled');
        auth.code_operation();
        //вводим и повторяем пароль
        auth.new_password(12345678);
        //проверяем, что кнопка доступна
        cy.get('div:nth-child(5) > button')
            .should('be.visible');
        auth.new_password_modal();
        navReg.close_modal_windows();
    });
    it('C27800 - Modal window Deposit', function() {
        auth.click_auth();
        auth.login_input();
        auth.password_input();
        auth.login_confirm();
        prof.deposit();
        prof.deposit_assert();
        prof.deposit_change();
        prof.deposit_change_Ethereum();
        prof.deposit_number();
        prof.deposit_assert_visible();
        prof.deposit_assert_modal_container();
        navReg.close_modal_windows();
    });
    it('C27801 - Modal window Withdrawal', function() {
        auth.click_auth();
        auth.login_input();
        auth.password_input();
        auth.login_confirm();
        prof.withdrawal('Вывод средств');
        prof.deposit_change();
        prof.pass_how_many_elements();
        prof.open_close_withdrawal_history();
        cy.wait(1000);
        prof.open_close_withdrawal_history();
        prof.withdrawal_assert_disabled();
        prof.credit_card_number();
        prof.withdrawal_number_();
        prof.withdrawal_assert_visible();
        prof.withdrawal_assert_modal_container();
        navReg.close_modal_windows();
    });
    it('C27802 - Modal window Transfer', function() {
        auth.click_auth();
        auth.login_input();
        auth.password_input();
        auth.login_confirm();
        prof.withdrawal('Перевод');
        prof.transfer_assert_disabled();
        prof.transfer_mail_();
        prof.transfer_deposit();
        prof.transfer_assert_visible();
        prof.transfer_assert_modal_container();
        navReg.close_modal_windows();
    });
    it('C27803 - Modal window Settings', function() {
        auth.click_auth();
        auth.login_input();
        auth.password_input();
        auth.login_confirm();
        prof.withdrawal('Настройки');
        prof.settings_hidebalance();
        cy.wait(1000);
        prof.settings_hidebalance();
        prof.settings_form();
        navReg.close_modal_windows();
    });
});

