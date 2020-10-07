import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";

describe("Modal window", () => {
  it("C27797 - Modal window register", function () {
    navReg.click_register();
    navReg.set_country("Angola");
    navReg.add_promocode("test123");
    navReg.close_promocode();
    navReg.register_assert_modal_container();
    navReg.registration_form("Соц. сети");
    navReg.register_assert_modal_container();
    navReg.register_next_assert_disabled();
    navReg.set_social_network("ВКонтакте");
    navReg.set_social_network("Одноклассники");
    navReg.set_social_network("Google");
    navReg.add_promocode("test001");
    navReg.register_next_assert_visible();
    navReg.registration_form("По e-mail");
    navReg.register_assert_disabled();
    cy.wait(1000);
    navReg.add_promocode("test001");
    navReg.close_promocode();
    //navReg.set_name('test123')
    navReg.set_email("test@zyx.com");
    navReg.set_pwd("111111");
    navReg.repeat_pwd("111111");
    //navReg.set_date_of_birth('07011919')
    navReg.set_phone_numb("911555444321");
    navReg.register_assert_visible();
    navReg.register_assert_modal_container();
    navReg.close_modal_windows();
  });
  it("C27798 - Modal window Authorization", function () {
    auth.login_without_enter();
    auth.login_confirm();
    auth.check_login_dont();
    auth.login_input();
    auth.password_input();
    auth.modal_container_enter();
    auth.button_registration();
    navReg.close_modal_windows();
  });
  it("C27799 - Modal window forget_password", function () {
    auth.login_without_enter();
    cy.wait(1000);
    auth.password_forget();
    auth.modal_container_password_recovery();
    auth.forget_set_email("nogm75@1win.xyz");
    auth.password_forget_send();
    auth.change_password_disabled();
    auth.code_operation();
    auth.new_password(12345678);
    auth.change_password_visible();
    auth.new_password_modal();
    navReg.close_modal_windows();
  });
  it("C27800 - Modal window Deposit", function () {
    auth.login();
    prof.deposit();
    //prof.deposit_assert();
    prof.deposit_change();
    prof.deposit_change_switch("Ethereum");
    cy.get(".send-row > .control > .input-wrapper > .input")
      .clear();
    prof.deposit_assert_disabled();
    prof.deposit_number();
    prof.deposit_assert_modal_container();
    navReg.close_modal_windows();
    auth.logout();
  });
  it("C27801 - Modal window Withdrawal", function () {
    auth.login();
    prof.withdrawal("Вывод средств");
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    //prof.open_close_withdrawal_history()
    cy.wait(1000);
    //prof.withdrawal_history_modal_container()
    //prof.open_close_withdrawal_history()
    prof.withdrawal_assert_disabled();
    prof.credit_card_number();
    prof.withdrawal_number_(100);
    prof.withdrawal_assert_visible();
    prof.withdrawal_assert_modal_container();
    navReg.close_modal_windows();
    auth.logout();
  });
  it("C27802 - Modal window Transfer", function () {
    auth.login();
    prof.withdrawal("Перевод");
    prof.transfer_assert_disabled();
    prof.transfer_mail("where100@mail.ru");
    prof.transfer_deposit("20");
    prof.transfer_assert_visible();
    prof.transfer_assert_modal_container();
    navReg.close_modal_windows();
    auth.logout();
  });
  it("C27803 - Modal window settings", function () {
    auth.login2();
    prof.withdrawal("Настройки");
    prof.settings_hidebalance();
    prof.settings_form();
    prof.settings_mail_disabled();
    prof.settings_assert_modal_container();
    navReg.close_modal_windows();
    auth.logout();
  });
  it.skip("C18503 - Download IOS(modal window)", () => {
    navReg.click_ios_download();
    navReg.check_ios_download_window();
    navReg.ios_modal_close();
  });
});

