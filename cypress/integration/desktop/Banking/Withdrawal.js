import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { bank } from "@support/desktop/Banking";
import { navReg } from "@support/desktop/NavReg";

describe("Withdrawal", () => {
  let number = 1;
  let NamePlaceholder;

  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.loginNew();
    cy.wait(2000);
  });
  it(" - RUB - проверка каждого метода оплаты", function () {
    prof.withdrawal("Вывод средств");
    cy.wait(2000);
    cy.document().then((doc1) => {

      const elementList = doc1.querySelectorAll(".payment").length;
      // let button = doc.querySelectorAll(".input").length;

      cy.get(".payment").should("have.length", elementList);
      let i;

      for (i = 1; i <= elementList - 1; i++) {
        cy.log(i);
        cy.get(`.payments > :nth-child(${i})`).click();
        cy.wait(1000);
        cy.get(":nth-child(2) > .input-wrapper > .input-message-container > .input").invoke("attr", "placeholder")
          .then((price) => {
            NamePlaceholder = price;
            cy.log(NamePlaceholder);
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
                cy.get(".input")
                  .eq(1)
                  .clear();

              } else if (NamePlaceholder === "WMZ кошелек") {
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
                  .type("Z238479008342");
                cy.get(".form > .button")
                  .should("be.enabled");
                cy.get(".input")
                  .eq(1)
                  .clear();
              } else if (NamePlaceholder === "Номер мобильного телефона Мегафон" || NamePlaceholder === "Номер мобильного телефона Билайн" || NamePlaceholder === "Номер мобильного телефона МТС" || NamePlaceholder === "Номер мобильного телефона Теле2") {
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
                  .type("89213467890");
                cy.get(".form > .button")
                  .should("be.enabled");
                cy.get(".input")
                  .eq(1)
                  .clear();
              } else if (NamePlaceholder === "Номер мобильного телефона") {
                cy.get(".input.icon-left")
                  .clear()
                  .type(limit - number);
                cy.get(".form > .button")
                  .should("be.disabled");

                cy.get(".input.icon-left")
                  .eq(1)
                  .clear()
                  .type(limit);
                cy.get(".input")
                  .first()
                  .clear()
                  .type("89213467890");
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
});
