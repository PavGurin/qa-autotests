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
    cy.contains("Вывести")
      .click();
  });
  afterEach(function () {
    bank.assert_withdrawalMobile();
  });
  it("C636625 - вывод средств на карту", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_visa();
  });
  it("C636629 - вывод средств на Qiwi", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_Qiwi();
  });
  it("C636632 - вывод средств на WebMoney", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_WebMoney();
  });
  it("C636625 - вывод средств на Яндекс деньги", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_YandexMoney();
  });
  it("C636628 - вывод средств на Билайн", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_Beeline();
  });
  it("C636630 - вывод средств на Мегафон", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_Megafon();
  });
  it("C636626 - вывод средств на Tele2", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_visa();
  });
  it("C636631 - вывод средств на MTC", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_MTC();
  });
  it("C636634 - вывод средств на AdvaCash", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_AdvCash();
  });
  it("C636633 - вывод средств на карту", function () {
    bank.changeRUB_for_mobile();
    bank.withdrawal_visa();
  });
});
