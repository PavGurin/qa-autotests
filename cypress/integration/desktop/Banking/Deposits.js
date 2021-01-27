import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { navReg } from "@support/desktop/NavReg";

describe("Deposit", () => {
  let number = 1;
  let NamePlaceholder;
  let NamePlaceholder2;

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
      // let button = doc.querySelectorAll(".input").length;

      cy.get(".payment").should("have.length", elementList);
      let i;

      for (i = 1; i <= elementList; i++) {
        cy.log(i);
        cy.get(`.payments > :nth-child(${i})`).click();
        cy.wait(1000);
        cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input").invoke("attr", "placeholder")
          .then((price) => {
            NamePlaceholder = price;
            cy.log(NamePlaceholder);

            cy.get(".header-hint")
            .invoke("text").then((limit2) => {
              let limit = limit2.split("\n")[1].split(" - ").map((str) => parseFloat(str.replace(/\D/g, "")))[0];

              if (NamePlaceholder === "Номер банковской карты") {
                cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
                cy.get(".form > .button")
                .should("be.disabled");

                cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
                cy.get(".input")
                .eq(1)
                .type(1234123412341234);
                cy.get(".form > .button")
                .should("be.enabled");

              } else if (NamePlaceholder === "Email аккаунта UMOB") {
                cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
                cy.get(".form > .button")
                .should("be.disabled");

                cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
                cy.get(".input")
                .clear()
                .eq(1)
                .type("sanya2651@mail.ru");
                cy.get(".form > .button")
                .should("be.enabled");
              } else {
                cy.get(".input.icon-left")
                  .clear()
                  .type(limit - number);
                cy.get(".form > .button")
                  .should("be.disabled");

                cy.get(".input.icon-left")
                  .first()
                  .clear()
                  .type(limit);
                cy.get(".form > .button")
                  .should("be.enabled");
              }
            });
          });
      }
    });
  });
  it("C2359888 - USD - проверка каждого метода оплаты", function () {

    navReg.change_currency_USD();

    cy.wait(3000);
    cy.document().then((doc) => {

      const elementList = doc.querySelectorAll(".payment").length;
      // let button = doc.querySelectorAll(".input").length;

      cy.get(".payment").should("have.length", elementList);
      let i;

      for (i = 1; i <= elementList; i++) {
        cy.log(i);
        cy.get(`.payments > :nth-child(${i})`).click();
        cy.wait(1000);
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
              cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
              cy.get(".form > .button")
                .should("be.disabled");

              cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
              cy.get(".input")
                .eq(1)
                .type(1234123412341234);
              cy.get(".form > .button")
                .should("be.enabled");

            } else if (NamePlaceholder === "Email аккаунта UMOB") {
              cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
              cy.get(".form > .button")
                .should("be.disabled");

              cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
              cy.get(".input")
                .eq(1)
                .clear()
                .type("sanya2651@mail.ru");
              cy.get(".form > .button")
                .should("be.enabled");
            } else if (NamePlaceholder2 === "Имя Фамилия") {
              cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
              cy.get(".form > .button")
                .should("be.disabled");

              cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
              cy.get(".input")
                .first()
                .clear()
                .type("Саня Василькович");
              cy.get(".form > .button")
                .should("be.enabled");
            } else {
              cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
              cy.get(".form > .button")
                .should("be.disabled");

              cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
              cy.get(".form > .button")
                .should("be.enabled");
            }
          });
              });
          });
      }
    });
  });
  it("C2359889 - Eur - проверка каждого метода оплаты", function () {
    navReg.change_currency_EUR();

    cy.wait(3000);
    cy.document().then((doc) => {

      const elementList = doc.querySelectorAll(".payment").length;
      // let button = doc.querySelectorAll(".input").length;

      cy.get(".payment").should("have.length", elementList);
      let i;

      // -17  потому что нельзя дойдти до платежки PlayStrix , там поля input идут в другом порядке, пока нет идей как обойти
      for (i = 1; i <= elementList - 17; i++) {
        cy.log(i);
        cy.get(`.payments > :nth-child(${i})`).click();
        cy.wait(1000);
        cy.document().then((doc) => {
          let input = doc.querySelectorAll(".input").length;


          cy.log(input);
          cy.get(".header-hint")
            .invoke("text").then((limit2) => {
              let limit = limit2.split("\n")[1].split(" - ").map((str) => parseFloat(str.replace(/\D/g, "")))[0];

              if (NamePlaceholder === "Номер банковской карты") {
                cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
                cy.get(".form > .button")
                .should("be.disabled");

                cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
                cy.get(".input")
                .eq(1)
                .type(1234123412341234);
                cy.get(".form > .button")
                .should("be.enabled");

              } else if (NamePlaceholder === "Email аккаунта UMOB") {
                cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
                cy.get(".form > .button")
                .should("be.disabled");

                cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
                cy.get(".input")
                .clear()
                .eq(1)
                .type("Z238479008342");
                cy.get(".form > .button")
                .should("be.enabled");
              } else {
                cy.get(".input.icon-left")
                .clear()
                .type(limit - number);
                cy.get(".form > .button")
                .should("be.disabled");

                cy.get(".input.icon-left")
                .first()
                .clear()
                .type(limit);
                cy.get(".form > .button")
                .should("be.enabled");
              }
            });
        });
      }
    });
  });
});
