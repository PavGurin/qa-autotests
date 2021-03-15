import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
let i;
let NamePlaceholder;
let NamePlaceholder2;

function checkPaymentsMobile (elementList) {
  for (i = 1; i <= elementList; i++) {
    cy.get(`.PaymentsRow__body > :nth-child(${i})`).click();
    cy.wait(1000);
    cy.get(".deposit-page-form input").first().invoke("attr", "placeholder") //получаем плейсхолдер первого инпута
      .then((price) => {
        NamePlaceholder = price;
        cy.get(":nth-child(1) > .input-wrapper > .input-message-container > .input").invoke("attr", "placeholder")
          .then((price) => {
            NamePlaceholder2 = price;
            cy.log(NamePlaceholder2);
            cy.get(".payment-limit-value")
              .invoke("text").then((limit2) => {
                let limit = limit2.split(" до ").map((str) => parseFloat(str.replace(/\D/g, "")))[0];

                cy.log(limit);

                if (NamePlaceholder === "Номер банковской карты") {
                  cy.get(".deposit-page-form input").last().clear()
                  .type(limit - 1);
                  cy.get(".deposit-page-form-button")
                  .should("be.disabled");

                  cy.get(".input").last().clear()
                  .type(limit);
                  cy.get(".input").first()
                  .type(1234123412341234);
                  cy.get(".deposit-page-form-button")
                  .should("be.enabled");

                } else if (NamePlaceholder === "Email аккаунта UMOB") {
                  cy.get(".deposit-page-form input").last().clear()
                  .type(limit - 1);
                  cy.get(".deposit-page-form-button")
                  .should("be.disabled");

                  cy.get(".input").last().clear()
                  .type(limit);
                  cy.get(".input").eq(1).clear()
                  .type("sanya2651@mail.ru");
                  cy.get(".deposit-page-form-button")
                  .should("be.enabled");
                } else if (NamePlaceholder2 === "Имя Фамилия") {
                  cy.get(".input.icon-left")
                  .clear()
                  .type(limit - 1);
                  cy.get(".deposit-page-form-button")
                  .should("be.disabled");

                  cy.get(".input").first().clear()
                  .type(limit);
                  cy.get(".input").first().clear()
                  .type("Саня Василькович");
                  cy.get(".deposit-page-form-button")
                  .should("be.enabled");
                } else {
                  cy.get(".input")
                    .last()
                    .clear()
                  .type(limit - 1);
                  cy.get(".deposit-page-form-button")
                  .should("be.disabled");

                  cy.get(".input").last().clear()
                  .type(limit);
                  cy.get(".deposit-page-form-button")
                  .should("be.enabled");
                }
              });
          });
      });
  }
}

describe("Deposit", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
    navReg.click_settings_main_page_for_mobile();
    cy.contains("Пополнить")
          .click();
    cy.wait(1000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("RUB - проверка каждого метода оплаты", function () {
    cy.document().then((doc1) => {

      const elementList = doc1.querySelectorAll(".PaymentButton.PaymentsRow__item.button.lg.wallet").length;

      cy.log(elementList);
      checkPaymentsMobile(elementList);
    });
  });
});
