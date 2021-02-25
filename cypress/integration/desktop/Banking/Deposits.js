import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { navReg } from "@support/desktop/NavReg";

let NamePlaceholder;
let NamePlaceholder2;
let i;
const number = 1;

function checkPayments (elementList) {
  for (i = 1; i <= elementList; i++) {
    cy.log(i);
    cy.get(`.payments > :nth-child(${i})`).click();
    cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input").invoke("attr", "placeholder")
      .then((price) => {
        NamePlaceholder = price;
        cy.get(":nth-child(1) > .input-wrapper > .input-message-container > .input").invoke("attr", "placeholder")
            .then((price) => {
              NamePlaceholder2 = price;
              cy.log(NamePlaceholder2);
              cy.get(".header-hint")
                  .invoke("text").then((limit2) => {
                    let limit = limit2.split("\n")[1].split(" - ").map((str) => parseFloat(str.replace(/\D/g, "")))[0];

                    if (NamePlaceholder === "Номер банковской карты") {
                      cy.get(".input.icon-left").clear()
                      .type(limit - number);
                      cy.get(".form > .button")
                      .should("be.disabled");

                      cy.get(".input.icon-left").first().clear()
                      .type(limit);
                      cy.get(".input")
                      .eq(1)
                      .type(1234123412341234);
                      cy.get(".form > .button")
                      .should("be.enabled");

                    } else if (NamePlaceholder === "Email аккаунта UMOB") {
                      cy.get(".input.icon-left").clear()
                      .type(limit - number);
                      cy.get(".form > .button")
                      .should("be.disabled");

                      cy.get(".input.icon-left").first().clear()
                      .type(limit);
                      cy.get(".input").eq(1).clear()
                      .type("sanya2651@mail.ru");
                      cy.get(".form > .button")
                      .should("be.enabled");
                    } else if (NamePlaceholder2 === "Имя Фамилия") {
                      cy.get(".input.icon-left")
                      .clear()
                      .type(limit - number);
                      cy.get(".form > .button")
                      .should("be.disabled");

                      cy.get(".input.icon-left").first().clear()
                      .type(limit);
                      cy.get(".input").first().clear()
                      .type("Саня Василькович");
                      cy.get(".form > .button")
                      .should("be.enabled");
                    } else {
                      cy.get(".input.icon-left").clear()
                      .type(limit - number);
                      cy.get(".form > .button")
                      .should("be.disabled");

                      cy.get(".input.icon-left").first().clear()
                      .type(limit);
                      cy.get(".form > .button")
                      .should("be.enabled");
                    }
                  });
            });
      });
  }
}

describe("Deposit", () => {

  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.loginNew();
    cy.wait(2000);
  });
  it(" - RUB - проверка каждого метода оплаты", function () {
    prof.deposit();
    cy.wait(2000);

    cy.document().then((doc1) => {

      const elementList = doc1.querySelectorAll(".payment").length;

      cy.get(".payment").should("have.length", elementList);
      checkPayments(elementList);
    });
  });
  it("C2359888 - USD - проверка каждого метода оплаты", function () {
    navReg.change_currency(0);

    cy.wait(3000);
    cy.document().then((doc) => {

      const elementList = doc.querySelectorAll(".payment").length;
      // let button = doc.querySelectorAll(".input").length;

      cy.get(".payment").should("have.length", elementList);
      checkPayments(elementList);
    });
  });
  it("C2359889 - Eur - проверка каждого метода оплаты", function () {
    navReg.change_currency_EUR();

    cy.wait(3000);
    cy.document().then((doc) => {

      const elementList = doc.querySelectorAll(".payment").length;
      // let button = doc.querySelectorAll(".input").length;

      cy.get(".payment").should("have.length", elementList);
      checkPayments(elementList);
    });
  });
  it("Случайная валюта - проверка каждого метода оплаты", function () {
    navReg.deposit_random_currency();

    cy.wait(3000);
    cy.document().then((doc) => {

      const elementList = doc.querySelectorAll(".payment").length;

      cy.get(".payment").should("have.length", elementList);
      checkPayments(elementList);
    });
  });
  it("C2271429 - проверка каждого метода оплаты", function () {
    prof.account_management_desktop();
    prof.random_currency();

    for (i = 1; i < 25; i++) {
      cy.log(i);
      cy.get(`.payments > :nth-child(${i})`).click();
      prof.check_length_payment();
    }
    cy.get(".modal-content__header__row__cell__overlay").click();
    prof.check_dollar();
  });
});
