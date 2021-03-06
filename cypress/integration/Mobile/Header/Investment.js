import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { topNav } from "@support/desktop/topNav";
import { invest } from "@support/desktop/Investment";

let validSum; //минимальная сумма инвестиции

describe("Investment", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
    auth.login_for_mobile_invest();
    cy.wait(1000);
    topNav.click_invest();

  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Сумма меньше минимальной", function () {
    invest.click_invest();
    cy.get("div.invest-modal-min-amount").invoke("text").then((MinSum) => {
      validSum = parseInt((MinSum));
      cy.log(validSum);
      invest.invest_money(validSum - 1);
      invest.click_invest_modal();
      cy.get(".invest-modal-subtitle-message")
          .should("have.text", `Минимальная сумма инвестиции\n${MinSum.toString()}, пополните баланс`);
      invest.click_close_modal();
    //
    });
  });
  it("Недостаточно средств", function () {
    invest.click_invest();
    cy.get("header .balance-trunc").invoke("text").then((balanceSum) => {
      let investSum = parseInt((balanceSum));
      cy.log(investSum);
      invest.invest_money(investSum + 1000000);
      invest.click_invest_modal();
      cy.get(".invest-modal-subtitle-message")
          .should("have.text", "Недостаточно средств,\nпополните баланс");
      invest.click_close_modal();
    });
  });
  it("Валидная сумма", function () {
    invest.click_invest();
    cy.get("div.invest-modal-min-amount").invoke("text").then((MinSum) => {
      validSum = parseInt((MinSum));
      cy.log(validSum);
      invest.invest_money(validSum);
      invest.click_invest_modal();
      cy.wait(1000);
      invest.click_close_modal();
    });
  });
  it("Пользователю запрещены инвестиции", function () {
    auth.logout_for_mobile();
    auth.login_for_mobile2(); /*используется аккаунт с заблокированными инвестициями*/
    topNav.click_invest();
    invest.click_invest();
    cy.get("div.invest-modal-min-amount").invoke("text").then((MinSum) => {
      validSum = parseInt((MinSum));
      cy.log(validSum);
      invest.invest_money(validSum);
      invest.click_invest_modal();
      cy.wait(1000);
      cy.get("#notifications-container")
          .should("have.text", "Ошибка");
      invest.click_close_modal();
    });
  });
});
