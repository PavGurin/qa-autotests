import { auth } from "@support/desktop/Authorization";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
import { bank } from "@support/desktop/Banking";
let NamePlaceholder;
let NamePlaceholder2;
let i;
const number = 1;

function checkPaymentsMobile (elementList) {
  for (i = 1; i <= elementList; i++) {
    cy.get(`.PaymentsRow__body > :nth-child(${i})`).click();
    cy.wait(1000);
    cy.get(".input.light-grey").invoke("attr", "placeholder")
      .then((price) => {
        NamePlaceholder = price;
        cy.log(NamePlaceholder);
        cy.get(".input.light-grey").last().invoke("attr", "placeholder")
          .then((price) => {
            NamePlaceholder2 = price;
            cy.log(NamePlaceholder2);
            cy.get(".payment-limit-value")
              .invoke("text").then((limit2) => {
                let limit = limit2.split("– ").map((str) => parseFloat(str.replace(/\D/g, "")))[0];

                cy.log(limit);

                if (NamePlaceholder === "Номер банковской карты") {
                  cy.get(".input")
                    .eq(0)
                    .type(1234123412341234);
                  cy.get(".button-wrapper > .button");
                  cy.get(".input").last()
                    .clear()
                  .type(limit - number);
                  cy.get(".button-wrapper > .button")
                  .should("be.disabled");

                  cy.get(".input").last().clear()
                  .type(limit);
                  cy.get(".button-wrapper > .button")
                  .should("be.enabled");
                  cy.get(".deposit-page-change")
                    .click();

                } else if (NamePlaceholder === "Номер мобильного телефона Мегафон" || NamePlaceholder === "Номер мобильного телефона Билайн" || NamePlaceholder === "Номер мобильного телефона МТС" || NamePlaceholder === "Номер мобильного телефона Теле2" || NamePlaceholder === "Номер мобильного телефона") {
                  cy.get(".input").first()
                    .clear()
                    .type("89214677845");
                  cy.get(".input").last().clear()
                  .type(limit - number);
                  cy.get(".button-wrapper > .button")
                  .should("be.disabled");

                  cy.get(".input").last().clear()
                  .type(limit);
                  cy.get(".button-wrapper > .button")
                  .should("be.enabled");
                  cy.get(".deposit-page-change")
                    .click();
                } else if (NamePlaceholder2 === "Имя Фамилия") {
                  cy.get(".input.icon-left")
                    .clear()
                    .type(limit - number);
                  cy.get(".button-wrapper > .button")
                    .should("be.disabled");

                  cy.get(".input").first().clear()
                    .type(limit);
                  cy.get(".input").first().clear()
                    .type("Саня Василькович");
                  cy.get(".button-wrapper > .button")
                    .should("be.enabled");
                  cy.get(".deposit-page-change")
                    .click();
                } else if (NamePlaceholder === "Номер телефона QIWI аккаунта") {
                  cy.get(".input").first()
                    .clear()
                    .type("89213567845");
                  cy.get(".input").last()
                    .clear()
                    .type(limit - number);
                  cy.get(".button-wrapper > .button")
                    .should("be.disabled");

                  cy.get(".input").last().clear()
                    .type(limit);
                  cy.get(".button-wrapper > .button")
                    .should("be.enabled");
                  cy.get(".deposit-page-change")
                    .click();
                } else {
                  cy.get(".input").first()
                    .clear()
                    .type("89213567845");
                  cy.get(".input").last().clear()
                    .type(limit - number);
                  cy.get(".button-wrapper > .button")
                    .should("be.disabled");

                  cy.get(".input").last().clear()
                    .type(limit);
                  cy.get(".button-wrapper > .button")
                    .should("be.enabled");
                  cy.get(".deposit-page-change")
                    .click();
                }
              });
          });
      });
  }
}

describe("WithdrawalMobile", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
    navReg.click_settings_main_page_for_mobile();
    cy.contains("Вывод")
      .click();
  });

  it("C636625 - вывод средств на карту", function () {
    cy.wait(1000);
    cy.document().then((doc1) => {

      const elementList = doc1.querySelectorAll(".PaymentButton.PaymentsRow__item.button.lg.wallet").length;

      cy.log(elementList);
      checkPaymentsMobile(elementList);
    });
  });
});
