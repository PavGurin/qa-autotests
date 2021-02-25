import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bank } from "@support/desktop/Banking";
import { navReg } from "@support/desktop/NavReg";

describe("Withdrawal", () => {
  beforeEach(() => {
    auth.login();
    // auth.login_stage()
  });
  it("C1086785 - RUB - вывод средств на карту ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.credit_card_number();
    prof.withdrawal_number_(100);
    prof.withdrawal_button();
    bank.assert_withdrawal_visa();
  });
  it("C1086789 - RUB - вывод средств на Qiwi ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    prof.number_phone("+79993454343");
    prof.withdrawal_number_(10);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086792 - RUB - вывод средств на Webmoney WMZ ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("WebMoney WMZ");
    prof.number_phone("Z123456789012");
    prof.withdrawal_number_(10);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086787 - RUB - вывод средств на Яндекс деньги ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("Яндекс.Деньги");
    prof.number_phone("410010101021023");
    prof.withdrawal_number_(100);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086791 - RUB - вывод средств на МТС ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("На мобильный МТС");
    prof.number_phone("+79115786534");
    prof.withdrawal_number_(100);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086786 - RUB - вывод средств на Теле 2 ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("На мобильный Теле2");
    prof.number_phone("+79115786534");
    prof.withdrawal_number_(100);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086788 - RUB - вывод средств на Билайн ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("На мобильный Билайн");
    prof.number_phone("+79115786534");
    prof.withdrawal_number_(100);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086790 - RUB - вывод средств на Мегафон ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("На мобильный Мегафон");
    prof.number_phone("+79115786534");
    prof.withdrawal_number_(100);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086793 - RUB - вывод средств на AdvCash ", function () {
    prof.withdrawal("Вывод средств");
    prof.change_currency_RUB();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("AdvCash");
    prof.number_phone("lina.solodova@gmail.com");
    prof.withdrawal_number_(10);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
  it("C1086805- EUR - вывод средств на карту ", function () {
    prof.withdrawal("Вывод средств");
    navReg.change_currency_EUR();
    prof.assert_button_withdrawal_is_disabled();
    prof.credit_card_number();
    prof.withdrawal_number_EUR();
    prof.withdrawal_button();
    bank.assert_withdrawal_visa();
  });

  it("C1086795- USD - вывод средств на карту ", function () {
    prof.withdrawal("Вывод средств");
    prof.assert_button_withdrawal_is_disabled();
    prof.credit_card_number();
    prof.withdrawal_number_EUR();
    prof.withdrawal_button();
    bank.assert_withdrawal_visa();
  });
  it("C1647885- EUR - вывод средств на Qiwi ", function () {
    prof.withdrawal("Вывод средств");
    navReg.change_currency_EUR();
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    prof.number_phone("+79993454343");
    prof.withdrawal_number_EUR();
    prof.withdrawal_button();
    bank.assert_withdrawal_visa();
  });
  it("C1647884- USD - вывод средств на Qiwi ", function () {
    prof.withdrawal("Вывод средств");
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    prof.number_phone("+79993454343");
    prof.withdrawal_number_EUR();
    prof.withdrawal_button();
    bank.assert_withdrawal_visa();
  });
  it("C2144680- USD - вывод средств на Webmoney ", function () {
    prof.withdrawal("Вывод средств");
    prof.assert_button_withdrawal_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("WebMoney WMZ");
    prof.number_phone("Z123456789012");
    prof.withdrawal_number_(10);
    prof.withdrawal_button();
    prof.assert_withdrawal_description();
  });
});
