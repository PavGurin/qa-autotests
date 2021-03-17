import { auth } from "@support/desktop/Authorization";
import { topNav } from "@support/desktop/topNav";
import { invest } from "@support/desktop/Investment";


let validSum; //минимальная сумма инвестиции
let count1; // старый счётчик
let count2; // старый счётчик
let count3; // новый счётчик
let count4; // новый счётчик

describe("investment", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Сумма меньше минимальной", function () {
    auth.loginNew();
    cy.wait(2000);
    topNav.click_invest();
    cy.wait(1000);
    invest.click_invest();
    cy.wait(1000);
    cy.get("div.invest-modal-min-amount").invoke("text").then((MinSum) => {
      validSum = parseInt((MinSum));
      cy.log(validSum);
      invest.invest_money(validSum - 1);
      invest.click_invest_modal();
      cy.get(".invest-modal-subtitle-message")
          .should("have.text", `Минимальная сумма инвестиции\n${MinSum.toString()}, пополните баланс`);
      invest.click_close_modal();
    });
  });
  it("Недостаточно средств", function () {
    invest.click_invest();
    cy.wait(1000);
    cy.get("div.header-balance__value").invoke("text").then((balanceSum) => {
      let investSum = parseInt((balanceSum));

      cy.log(investSum);
      invest.invest_money(investSum + 1000000);
      invest.click_invest_modal();
      cy.get(".invest-modal-subtitle-message")
          .should("have.text", "Недостаточно средств,\nпополните баланс");
      invest.click_close_modal();
    });
  });
  it.skip("Валидная сумма", function () {
    auth.login_for_invest();
    cy.wait(3000);
    topNav.click_invest();
    invest.click_invest();
    cy.wait(1000);
    cy.get("div.invest-modal-min-amount").invoke("text").then((MinSum) => {
      validSum = parseInt((MinSum));
      cy.log(validSum);
      invest.invest_money(validSum);
      invest.click_invest_modal();
      invest.click_close_modal();
    });
  });
  it("Проверка счётчика", function () {
    cy.get(".numbers-reel-invest").scrollIntoView();
    /** получаем последние 2 цифры счётчика, складываем в oldCount **/
    cy.get(".digit-section:nth-last-child(1)")
        .invoke("text")
        .then((text) => {
          count1 = text;
        }).then(() => {
          cy.get(".digit-section:nth-last-child(2)")
          .invoke("text");
        }).then((text) => {
          count2 = text;
        }).then(() => {
          let oldCount = count2 + count1;

          cy.log("Старый счётчик:");
          cy.log(oldCount);
          /** Снова получаем последние 2 цифры счётчика, складываем в oldCount **/
          cy.wait(9000); //ждём 9 секунд, пока обновится счётчик
          cy.get(".digit-section:nth-last-child(1)")
          .invoke("text")
          .then((text) => {
            count3 = text;
          }).then(() => {
            cy.get(".digit-section:nth-last-child(2)")
            .invoke("text");
          }).then((text) => {
            count4 = text;
          }).then(() => {
            let newCount = count4 + count3;

            cy.log(typeof (newCount));
            cy.log("Новый счётчик:");
            cy.log(newCount);
            expect(Number(oldCount)).to.be.lessThan(Number(newCount));
          });
        });
  });
});
