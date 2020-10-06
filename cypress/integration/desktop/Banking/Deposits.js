import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bank } from "@support/desktop/Banking";
import { navReg } from "@support/desktop/NavReg";

describe("Deposit", () => {
  beforeEach(() => {
    cy.wait(10000);
    auth.modalBonus();
    auth.login();
    //prof.deposit();
    cy.wait(1000);
  });
  it.skip("C1086820 - RUB - пополнение cо счета мегафона", function () {
    cy.get(".payment").should("have.length", 13);
    //prof.change_currency_RUB()
    //  prof.deposit_change()
    // prof.deposit_change_switch('С мобильного Мегафон')
    // prof.deposit_number();
    prof.deposit_number_phone();
    prof.deposit_button();
    bank.assert_deposit_desktop();
  });
  it.skip("C1086815 - RUB - Пополнение с банковской карты", function () {
    prof.change_currency_RUB();
    prof.credit_card_deposit_number();
  });
  it.skip("C1086816 - RUB - пополнение Яндекс.деньги", function () {
    prof.change_currency_RUB();
    prof.deposit_change();
    prof.assert_button_is_disabled();
    prof.deposit_change_switch("Яндекс.Деньги");
    prof.type_numberPhone("410015618886792");
    prof.assert_button_is_active();
  });
  it.skip("C1086817 - RUB - Пополнение Qiwi", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    prof.type_numberPhone("+79113457834");
    prof.assert_button_is_active();
  });
  it.skip("C1086818 - RUB - Пополнение Билайн", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("С мобильного Билайн");
    prof.type_numberPhone("+79053457834");
    prof.assert_button_is_active();
  });
  it.skip("C1086819 - RUB - Пополнение MTC", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("С мобильного МТС");
    prof.type_numberPhone("+79053457834");
    prof.assert_button_is_active();
  });
  it.skip("C1086821 - RUB - Пополнение Теле2", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("С мобильного Теле2");
    prof.type_numberPhone("+79053457834");
    prof.assert_button_is_active();
  });
  it.skip("C1086822 - RUB - кошелек Piastrix", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("Кошелек Piastrix");
    prof.type_numberPhone("+79053457834");
    prof.assert_button_is_active();
  });
  it.skip("C1086823 - RUB - кошелек Bitcoin", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("BitCoin");
    prof.assert_button_is_active();
  });
  it.skip("C1086824 - RUB - кошелек Ethereum", function () {
    prof.change_currency_RUB();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("Ethereum");
    prof.assert_button_is_active();
  });
  it.skip("C1086825 - USD - пополнение c банковской карты", function () {
    prof.credit_card_deposit_number();
  });
  it.skip("C1573890 - USD - пополнение c QIWI", function () {
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    prof.type_numberPhone("+79113457834");
    prof.assert_button_is_active();
  });
  it.skip("C2144675 - USD - пополнение c BitCoin", function () {
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("BitCoin");
    prof.assert_button_is_active();
  });
  it.skip("C2144676 - USD - пополнение c Ethereum", function () {
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("Ethereum");
    prof.assert_button_is_active();
  });
  it.skip("C1086835 - EUR - пополнение c банковской карты", function () {
    prof.change_currency_RUB();
    navReg.change_currency_EUR();
    prof.credit_card_deposit_number();
    //prof.withdrawal_number_EUR()
    //prof.deposit_assert_visible()
  });
  it.skip("C1573891 - EUR - пополнение c QIWI", function () {
    navReg.change_currency_EUR();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("QIWI-кошелек");
    prof.type_numberPhone("+79113457834");
    prof.assert_button_is_active();
  });
  it.skip("C2144677 - EUR -  пополнение c BitCoin", function () {
    navReg.change_currency_EUR();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("BitCoin");
    prof.assert_button_is_active();
  });
  it.skip("C2144678 - EUR -  пополнение c Ethereum", function () {
    navReg.change_currency_EUR();
    prof.assert_button_is_disabled();
    prof.deposit_change();
    prof.deposit_change_switch("Ethereum");
    prof.assert_button_is_active();
  });
  it.skip("C2144679 - UAH - пополнение c банковской карты", function () {
    cy.contains("UAH")
      .click();
    prof.credit_card_deposit_number();
  });
  it("случайный выбор новой валюты", function () {
    cy.get(".header-balance__angle-icon").trigger("mouseover");
    cy.get("#header > div.header__line--top > div.header__profile-block > div > div.header-balance > div.header-balance__bottom-line > div > div.dropdown-menu > div > article > section:nth-child(3) > button")
        .click();
    //prof.credit_card_deposit_number(); ввести номер карты
  //:nth-child(5) > .currency-item-additional > .currency-dropdown > .dropdown > .dropdown-trigger > .currency-dropdown-icon > .icon > path
  });
});
