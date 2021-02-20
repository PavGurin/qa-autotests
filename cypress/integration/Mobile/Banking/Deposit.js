import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
import { bank } from "@support/desktop/Banking";

describe("Banking", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
    navReg.click_settings_main_page_for_mobile();
    cy.contains("Пополнить")
      .click();
  });
  it("C636650 RUB - пополнение cо счета мегафона", function () {
    // .PaymentButton PaymentsRow__item button lg wallet PaymentButton--active
    cy.wait(1000);
    bank.changeRUB_for_mobile();
    bank.deposit_megafon();
    bank.assert_deposit_megafon();
  });
  it("C636645 RUB - пополнение с карты", function () {
    bank.changeRUB_for_mobile();
    bank.visa_method_for_mobile();
    bank.deposit_visa_for_mobile();
  });
  it("C636646 RUB - пополнение Яндекс деньги", function () {
    bank.changeRUB_for_mobile();
    bank.YandexCash_method_for_mobile();
    bank.YandexCash_for_mobile();
  });
  it("C636647 RUB - пополнение Qiwi", function () {
    bank.changeRUB_for_mobile();
    bank.Qiwi_method_for_mobile();
    bank.Qiwi_for_mobile();
  });
  it("C636648 RUB - пополнение Билайн", function () {
    bank.changeRUB_for_mobile();
    bank.Beeline_method_for_mobile();
    bank.Qiwi_for_mobile();
  });
  it("C636651 RUB - пополнение Tele2", function () {
    bank.changeRUB_for_mobile();
    bank.Tele2_method_for_mobile();
    cy.wait(1000);
    bank.Qiwi_for_mobile();
  });
  it("C636651 RUB - пополнение МТС", function () {
    bank.changeRUB_for_mobile();
    bank.Mts_method_for_mobile();
    bank.Qiwi_for_mobile();
  });
  it("C636651 RUB - пополнение Piastrix", function () {
    bank.changeRUB_for_mobile();
    bank.Piastrix_method_for_mobile();
    cy.wait(1000);
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(100);
    bank.button_continue_visible_for_mobile();
  });
  it("C636651 RUB - пополнение Bitcoin", function () {
    bank.changeRUB_for_mobile();
    bank.Bitcoin_method_for_mobile();
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(2250);
    bank.button_continue_visible_for_mobile();
  });
  it("C636651 RUB - пополнение Инсвойс", function () {
    bank.changeRUB_for_mobile();
    bank.Invoice_method_for_mobile();
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(1750);
    bank.button_continue_visible_for_mobile();
  });
  it("C636645 USD - пополнение с карты", function () {
    bank.visa_method_for_mobile();
    bank.deposit_visa_for_mobile();
  });
  it("C636647 USD - пополнение Qiwi", function () {
    bank.Qiwi_method_for_mobile();
    bank.Qiwi_for_mobile();
  });
  it("C636651 USD - пополнение Bitcoin", function () {
    bank.BitcoinUSD_method_for_mobile();
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(2250);
    bank.button_continue_visible_for_mobile();
  });
  it("C636651 USD - пополнение Инвойс", function () {
    bank.InvoiceUSD_method_for_mobile();
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(1750);
    bank.button_continue_visible_for_mobile();
  });
  it("C636645 EUR - пополнение с карты", function () {
    bank.changeEUR_for_mobile();
    bank.visa_method_for_mobile();
    bank.deposit_visa_for_mobile();
  });
  it("C636647 EUR - пополнение Qiwi", function () {
    bank.changeEUR_for_mobile();
    bank.Qiwi_method_for_mobile();
    bank.Qiwi_for_mobile();
  });
  it("C636651 EUR - пополнение Bitcoin", function () {
    bank.changeEUR_for_mobile();
    bank.BitcoinUSD_method_for_mobile();
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(2250);
    bank.button_continue_visible_for_mobile();
  });
  it("C636651 EUR - пополнение Инсвойс", function () {
    bank.changeEUR_for_mobile();
    bank.InvoiceUSD_method_for_mobile();
    bank.button_continue_disabled_for_mobile();
    bank.Piastrix_for_mobile(1750);
    bank.button_continue_visible_for_mobile();
  });
  it("C636645 UAH - пополнение с карты", function () {
    bank.changeUAH_for_mobile();
    bank.visa_method_for_mobile();
    bank.deposit_visa_for_mobile();
  });
});
